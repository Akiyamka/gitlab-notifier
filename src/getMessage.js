function objectToString(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc += `${key}: ${val}\n`;
    return acc;
  }, '');
}

export function getMessage(mr) {
  return `[${mr.name}]:
${
    mr.changes.map(c => `  - ${c.id}: ${c.before} → ${c.after}`).join('\n')
  }`
}