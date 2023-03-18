import { exec } from 'child_process';

export const execShellCommand = (cmd: string) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      resolve(stdout ? stdout : stderr);
    });
  });
}
