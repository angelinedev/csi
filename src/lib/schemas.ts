
import { z } from 'zod';

const memberSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  department: z.string().min(1, { message: "Department is required." }),
  year: z.string().min(1, { message: "Year is required." }),
});

export const formSchema = z.object({
  teamName: z.string().min(2, { message: 'Team name must be at least 2 characters long.' }).max(50, { message: 'Team name cannot be longer than 50 characters.' }),
  problemStatement: z.string().min(1, { message: 'You must select a problem statement.' }),
  members: z.array(memberSchema).min(1, { message: "At least one member is required." }).max(6),
});

export type FormValues = z.infer<typeof formSchema>;
