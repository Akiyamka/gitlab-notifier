function objectToString(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc += `${key}: ${val}\n`;
    return acc;
  }, '');
}

export function getMessage(mr) {
  return `[${mr.name}]:
${
    mr.changes.map(c => {
      const haveBefore = c.before !== undefined;
      return haveBefore
        ? `  - ${c.id}: ${c.before} → ${c.after}`
        : `  - ${c.id}: ${c.after}`;
    }).join('\n')
  }`
}
