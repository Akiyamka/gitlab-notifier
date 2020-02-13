import env from 'dotenv';
import notifier from 'node-notifier';
env.config();

import log from './logger';
import { getMergeRequestsInfo } from './getInfo';
import { diffWithMemory } from './diffWithMemory';
import { getMessage } from './getMessage'; 
import { pause } from './utils';

!async function main() {
  const addChanges = diffWithMemory({});

  while(true) {
    const mergeRequests = await getMergeRequestsInfo();
    const withChanges = mergeRequests.map(addChanges);
    withChanges.forEach(mr => {
      if (mr.changes.length === 0) return;
      const message = getMessage(mr)
      log.debug(message)
      notifier.notify({
        title: `GitLab: ${mr.name} was updated`,
        message: message,
        sound: true,
        open: mr.url
      })
    })
    await pause(10000);
  }
}();
