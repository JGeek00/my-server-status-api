export const decodeBase64 = (hash: string) => {
  return Buffer.from(hash, 'base64').toString('utf8');
}