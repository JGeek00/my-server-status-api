export const checkRootAccess = () => {
  if (process.geteuid) {
    return process.geteuid() === 0;   // UID 0 is always root
  } else {
    return false;
  }
};
