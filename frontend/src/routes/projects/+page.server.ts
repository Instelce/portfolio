import type { PageServerLoad } from './$types';
import { projects, skills } from './data';

export const load = (async ({url}) => {
  return {
    projects,
    skills,
    selectedSkills: url.searchParams.get('skills')?.split(',').filter(s => s !== "") ?? []
  };
}) satisfies PageServerLoad;
