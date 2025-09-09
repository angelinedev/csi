
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const MAX_MEMBERS = 6;

// Helper function to convert data to CSV format
const convertToCSV = (data: any[]) => {
  let header = '"Team Name","Problem Statement"';
  for (let i = 1; i <= MAX_MEMBERS; i++) {
    header += `,"Member ${i} Name","Member ${i} Department","Member ${i} Year","Member ${i} Gender"`;
  }
  header += '\n';

  let csv = header;
  data.forEach((registration) => {
    let row = `"${registration.teamName}","${registration.psNumber}"`;
    const members = registration.teamMembers || [];
    for (let i = 0; i < MAX_MEMBERS; i++) {
      if (i < members.length) {
        const m = members[i];
        row += `,"${m.name || ''}","${m.department || ''}","${m.year || ''}","${m.gender || ''}"`;
      } else {
        row += ',,,,'; // Add empty fields for missing members
      }
    }
    row += '\n';
    csv += row;
  });

  return csv;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { teamName, psNumber, teamMembers } = req.body;

      // Add a new document with a generated id.
      await addDoc(collection(db, "registrations"), {
        teamName,
        psNumber,
        teamMembers,
        createdAt: new Date(),
      });

      res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, "registrations"));
      const registrations: any[] = [];
      querySnapshot.forEach((doc) => {
        registrations.push({ id: doc.id, ...doc.data() });
      });

      if (registrations.length === 0) {
        return res.status(404).json({ message: 'No registrations yet.' });
      }

      const csvData = convertToCSV(registrations);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=registrations.csv');
      res.send(csvData);

    } catch (error) {
      console.error("Error fetching documents: ", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};

export default handler;
