export async function pause(ms) {
  return new Promise(res => setTimeout(res, ms));
}