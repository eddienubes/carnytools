import { inspect } from 'node:util';
import type {
  GetDependencyReleaseLine,
  GetReleaseLine
} from '@changesets/types';

export const getReleaseLine: GetReleaseLine = async (
  release
): Promise<string> => {
  // const header = release.releases.hh; // hh is the id of the release
  console.log(inspect(release, { depth: null }));

  return `### matter of fact release line`;
};

export const getDependencyReleaseLine: GetDependencyReleaseLine = async (
  release
): Promise<string> => {
  console.log(inspect(release, { depth: null }));

  return `### matter of fact dep release line`;
};

export default {
  getReleaseLine,
  getDependencyReleaseLine
};
