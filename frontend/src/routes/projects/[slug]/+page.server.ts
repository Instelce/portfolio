import type { PageServerLoad } from './$types';
import { projects } from '../data';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) throw error(404);

  return { project };
}) satisfies PageServerLoad;
