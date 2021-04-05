export const urlSafe = (value: string) =>
  value.replace(/[^a-z0-9]/gi, '_').toLowerCase()
