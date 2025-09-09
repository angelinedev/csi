
import { problemStatements } from '@/lib/problem-statements-data';
import ProblemStatementsClient from '@/components/problem-statements-client';

export default function ProblemStatementsPage() {
  // This is now a server component, so we can directly fetch or import data.
  const allStatements = problemStatements;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-headline font-bold mb-2">Smart India Hackathon</h1>
      <p className="text-xl text-muted-foreground mb-8">Problem Statements</p>
      <ProblemStatementsClient allStatements={allStatements} />
    </div>
  );
}
