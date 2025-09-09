
import { ProblemStatement } from '../lib/problem-statements-data';

export async function searchProblemStatements(
  searchTerm: string,
  category: string,
  allStatements: ProblemStatement[]
): Promise<ProblemStatement[]> {
  let statements = allStatements;

  if (searchTerm) {
    statements = statements.filter(ps =>
      ps.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ps.psNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ps.organization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category !== 'All') {
    statements = statements.filter(ps => ps.category === category);
  }

  return Promise.resolve(statements);
}
