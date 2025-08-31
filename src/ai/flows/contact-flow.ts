'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles the contact message.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ContactMessageSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  department: z.string().min(2, {
    message: 'Department is required.',
  }),
  year: z.string().min(1, {
    message: 'Year is required.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactMessageInput = z.infer<typeof ContactMessageSchema>;

export async function sendContactMessage(
  input: ContactMessageInput
): Promise<{ success: boolean }> {
  return await contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactMessageSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    console.log('New contact message received:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Department:', input.department);
    console.log('Year:', input.year);
    console.log('Message:', input.message);
    
    // In a real application, you would send an email or save this to a database.
    // For now, we are just logging it to the server console.

    return { success: true };
  }
);
