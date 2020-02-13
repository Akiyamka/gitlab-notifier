import fetch from 'isomorphic-unfetch';
import log from './logger';

export async function getAllMergeRequests(params = {}) {
  try {
    const response = await fetch('https://gitlab.com/api/v4/merge_requests?state=opened', {
      method: 'GET',
      headers: {
        'Private-Token': process.env.USER_TOKEN
      }
    });

    return response.json()

  } catch (error) {
    log.error(error);
    return [];
  } 
}