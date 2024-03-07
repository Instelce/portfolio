import type { PageServerLoad } from './$types';
import { projects } from './data';

export const load = (async () => {
  return {
    projects
  };
}) satisfies PageServerLoad;
