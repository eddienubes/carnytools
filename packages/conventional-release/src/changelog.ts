import { inspect } from 'node:util';
import type {
  GetDependencyReleaseLine,
  GetReleaseLine
} from '@changesets/types';

export const getReleaseLine: GetReleaseLine = async (
  release
): Promise<string> => {
  // const header = release.releases.hh;
  console.log(inspect(release, { depth: null }));

  return `### matter of fact release line`;
};

export const getDependencyReleaseLine: GetDependencyReleaseLine = async (
  release
): Promise<string> => {
  console.log(inspect(release, { depth: null }));

  await someAsyncFunction();

  return `### matter of fact dep release line`;
};

const someAsyncFunction = async () => {};

export default {
  getReleaseLine,
  getDependencyReleaseLine
};
