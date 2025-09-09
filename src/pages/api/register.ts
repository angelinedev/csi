
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CSV_PATH = path.join(process.cwd(), 'registrations.csv');
const MAX_MEMBERS = 6;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { teamName, psNumber, teamMembers: members } = req.body;

    let header = '"Team Name","Problem Statement"';
    for (let i = 1; i <= MAX_MEMBERS; i++) {
      header += `,"Member ${i} Name","Member ${i} Department","Member ${i} Year","Member ${i} Gender"`;
    }
    header += '\n';

    let row = `"${teamName}","${psNumber}"`;
    if (members && Array.isArray(members)) {
      for (let i = 0; i < MAX_MEMBERS; i++) {
        if (i < members.length) {
          const m = members[i];
          row += `,"${m.name || ''}","${m.department || ''}","${m.year || ''}","${m.gender || ''}"`;
        } else {
          row += ',,,,'; // Add empty fields for missing members
        }
      }
    }
    row += '\n';

    if (!fs.existsSync(CSV_PATH)) {
      fs.writeFileSync(CSV_PATH, header, 'utf-8');
    }

    fs.appendFileSync(CSV_PATH, row, 'utf-8');

    res.status(200).json({ message: 'Registration successful!' });
  } else if (req.method === 'GET') {
    if (fs.existsSync(CSV_PATH)) {
      const fileContents = fs.readFileSync(CSV_PATH, 'utf-8');
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=registrations.csv');
      res.send(fileContents);
    } else {
      res.status(404).json({ message: 'No registrations yet.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};

export default handler;
