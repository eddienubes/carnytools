import type { GetAddMessage, GetVersionMessage } from '@changesets/types';
import { simpleGit } from 'simple-git';

const git = simpleGit();

const getAddMessage: GetAddMessage = async (changeset): Promise<string> => {
  const branch = await git.branch();



  return `chore(docs): added changeset for `;
};

const BRANCH_TOKENS = {
  type: '<type>',
  issue: '<issue>',
  description: '<description>'
};

export default {
  getAddMessage
};
