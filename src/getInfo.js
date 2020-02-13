import { getAllMergeRequests } from './api';

export async function getMergeRequestsInfo() {
  const mergeRequests = await getAllMergeRequests();
  return mergeRequests.map(mr => ({
    name: mr.title,
    notes: mr.user_notes_count,
    upvotes: mr.upvotes,
    url: mr.web_url
  }));
}