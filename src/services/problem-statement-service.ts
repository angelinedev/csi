
import { problemStatements, ProblemStatement } from '@/lib/problem-statements-data';

export async function getProblemStatements(): Promise<ProblemStatement[]> {
  return Promise.resolve(problemStatements);
}

export async function getProblemStatementByPsNumber(psNumber: string): Promise<ProblemStatement | null> {
  const statement = problemStatements.find((p) => p.psNumber === psNumber);
  return Promise.resolve(statement || null);
}
