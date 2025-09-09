'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { problemStatements, ProblemStatement } from '@/lib/problem-statements-data';

const departmentEnum = z.enum(['CSE', 'ECE', 'EEE', 'AIDS', 'AIML', 'CS', 'CSBS', 'BME', 'IT']);

const formSchema = z.object({
  teamName: z.string().min(1, 'Team name is required'),
  psNumber: z.string(),
  teamMembers: z.array(z.object({
    name: z.string().min(1, 'Name is required'),
    department: departmentEnum,
    year: z.string().min(1, 'Year is required'),
    gender: z.enum(['male', 'female'])
  })).min(6, 'A team must have 6 members').max(6, 'A team must have 6 members').refine(team => team.some(member => member.gender === 'female'), {
    message: "At least one female member is required",
    path: ["teamMembers"]
  })
});

export default function RegisterPage() {
  const params = useParams();
  const { toast } = useToast();
  const [psNumber, setPsNumber] = useState<string | null>(null);
  const [problemStatement, setProblemStatement] = useState<ProblemStatement | null>(null);

  useEffect(() => {
    if (params) {
      const psNum = params.psNumber as string;
      setPsNumber(psNum);
      const ps = problemStatements.find(p => p.psNumber === psNum);
      if (ps) {
        setProblemStatement(ps);
      }
    }
  }, [params]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      psNumber: psNumber || '',
      teamMembers: Array(6).fill({ name: '', department: undefined, year: '', gender: undefined })
    }
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "teamMembers",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    if (response.ok) {
      toast({ title: "Registration Successful!", description: "Your team has been registered." });
      form.reset();
    } else {
      toast({ title: "Registration Failed", description: "An error occurred while registering your team." });
    }
  }

  if (!psNumber || !problemStatement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Problem Statement Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><strong>Organization:</strong> {problemStatement.organization}</p>
          <p><strong>Problem Statement Title:</strong> {problemStatement.title}</p>
          <p><strong>Category:</strong> {problemStatement.category}</p>
          <p><strong>PS Number:</strong> {problemStatement.psNumber}</p>
          <p><strong>Theme:</strong> {problemStatement.theme}</p>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Register Your Team</CardTitle>
          <p className="text-muted-foreground">Fill out the details below to enter the hackathon.</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., The Innovators" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Accordion type="single" collapsible className="w-full">
                {fields.map((field, index) => (
                  <AccordionItem value={`item-${index}`} key={field.id}>
                    <AccordionTrigger>Team Member {index + 1}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name={`teamMembers.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Member's Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`teamMembers.${index}.department`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Department</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {departmentEnum.options.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`teamMembers.${index}.year`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1st Year</SelectItem>
                                  <SelectItem value="2">2nd Year</SelectItem>
                                  <SelectItem value="3">3rd Year</SelectItem>
                                  <SelectItem value="4">4th Year</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`teamMembers.${index}.gender`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                  
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button type="submit">Register Team</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
