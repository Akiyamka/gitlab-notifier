export function diffWithMemory(initial = {}) {
  let lastChange = initial;
  return update => {
    const changes = Object.entries(update).reduce((changes, [key, val]) => {
      if (!Object.is(val, lastChange[key])) {
        changes.push({
          id: key,
          before: lastChange[key],
          after: val
        });
      }
      return changes;
    }, []);
    lastChange = { ...update};
    return {
      ...update,
      changes: changes
    };
  }
}