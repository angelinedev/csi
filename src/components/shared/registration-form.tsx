
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { registerTeamAction } from "@/lib/actions";
import { formSchema, FormValues } from "@/lib/schemas";
import { ProblemStatement } from "../../lib/problem-statements-data";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface RegistrationFormProps {
  problemStatements: ProblemStatement[];
  onProblemStatementChange: (psNumber: string | null) => void;
}

export function RegistrationForm({ problemStatements, onProblemStatementChange }: RegistrationFormProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      problemStatement: "",
      members: [{ name: "", department: "", year: ""}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "members",
  });

  async function onSubmit(data: FormValues) {
    const result = await registerTeamAction(data);
    if (result.success) {
      toast({
        title: "Registration Successful",
        description: "Your team has been registered for the hackathon.",
      });
      if (result.warning) {
        toast({
          title: "Registration Warning",
          description: result.warning,
        });
      }
      form.reset();
    } else {
      toast({
        title: "Registration Failed",
        description: result.error,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your team name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="problemStatement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Problem Statement</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  onProblemStatementChange(value);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a problem statement" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {problemStatements.map((ps) => (
                    <SelectItem key={ps.psNumber} value={ps.psNumber}>
                      {ps.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <h3 className="text-lg font-medium">Team Members</h3>
          {fields.map((field, index) => (
            <Card key={field.id} className="p-4 mt-4 space-y-4 relative">
              <FormField
                control={form.control}
                name={`members.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Member name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`members.${index}.department`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Department" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`members.${index}.year`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input placeholder="Year of study" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {index > 0 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </Card>
          ))}
          <Button
            type="button"
            variant="outline"
            className="mt-4"
            onClick={() => append({ name: "", department: "", year: "" })}
          >
            Add Member
          </Button>
        </div>
        <Button type="submit">Register Team</Button>
      </form>
    </Form>
  );
}
