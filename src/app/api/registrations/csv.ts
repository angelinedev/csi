
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase'; 

// Define a type for the registration data, aligning with your Firestore structure
interface Member {
  name: string;
  department: string;
  year: string;
}

interface Registration {
  teamName: string;
  problemStatement: string;
  members: Member[];
}

// Helper function to convert a single registration to a CSV row
function toCsvRow(registration: Registration): string {
  const { teamName, members } = registration;
  let row = `"${teamName}"`;
  for (let i = 0; i < 6; i++) { // Assuming a max of 6 members
    if (i < members.length) {
      const m = members[i];
      row += `,"${m.name}","${m.department}","${m.year}"`;
    } else {
      row += ',,,'; // Add empty fields if member doesn't exist
    }
  }
  return row;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const registrationsRef = collection(db, 'registrations');
    const querySnapshot = await getDocs(registrationsRef);

    const registrations: Registration[] = [];
    querySnapshot.forEach((doc) => {
      registrations.push(doc.data() as Registration);
    });

    // Create CSV header
    let csvHeader = '"Team Name"';
    for (let i = 1; i <= 6; i++) {
      csvHeader += `,"Member ${i} Name","Member ${i} Department","Member ${i} Year"`;
    }
    
    // Convert all registrations to CSV rows
    const csvRows = registrations.map(toCsvRow);

    // Combine header and rows
    const csvData = `${csvHeader}\n${csvRows.join('\n')}`;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="registrations.csv"');
    res.status(200).send(csvData);

  } catch (error) {
    console.error('Error fetching or generating CSV:', error);
    res.status(500).json({ error: 'Failed to generate CSV file.' });
  }
}
