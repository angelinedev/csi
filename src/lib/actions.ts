
'use server';

import { z } from 'zod';
import { promises as fs } from 'fs';
import path from 'path';
import { formSchema, FormValues } from './schemas';

const dataDir = path.join(process.cwd(), 'data');
const csvFilePath = path.join(dataDir, 'registrations.csv');

async function ensureDataDirExists() {
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

async function isTeamNameDuplicate(teamName: string): Promise<boolean> {
    try {
        const content = await fs.readFile(csvFilePath, 'utf-8');
        const rows = content.split('\n').slice(1);
        return rows.some(row => row.split(',')[0] === teamName);
    } catch (error) {
        return false; // If file doesn't exist, no duplicates are possible.
    }
}

export async function registerTeamAction(data: FormValues): Promise<{ success: boolean; error?: string; warning?: string }> {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
        const errorMessages = validation.error.issues.map(issue => issue.message).join(' ');
        return { success: false, error: `Invalid data: ${errorMessages}` };
    }

    const { teamName, members } = data;

    await ensureDataDirExists();

    if (await isTeamNameDuplicate(teamName)) {
        return { success: false, error: `Team name \"${teamName}\" is already taken.` };
    }

    const memberData = members?.map(m => `${m!.name},${m!.department},${m!.year}`).join(',') || '';
    const csvLine = `${teamName},${memberData}\n`;

    try {
        let headers = 'Team Name,Member 1 Name,Member 1 Department,Member 1 Year,Member 2 Name,Member 2 Department,Member 2 Year,Member 3 Name,Member 3 Department,Member 3 Year,Member 4 Name,Member 4 Department,Member 4 Year,Member 5 Name,Member 5 Department,Member 5 Year,Member 6 Name,Member 6 Department,Member 6 Year\n';
        try {
            await fs.access(csvFilePath);
        } catch {
            await fs.writeFile(csvFilePath, headers, 'utf-8');
        }

        await fs.appendFile(csvFilePath, csvLine, 'utf-8');
        console.log('New registration saved to CSV:', csvLine);
        return { success: true };

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        console.error('Error saving registration to CSV:', error);
        return { success: false, error: `Failed to register team: ${errorMessage}` };
    }
}
