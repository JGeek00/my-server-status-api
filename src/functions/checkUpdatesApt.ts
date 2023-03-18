import { exec } from "child_process"

export const checkUpdatesApt = () => {
  exec('sudo apt update', (error, stdout) => {
    if (!error) {
      
    }
  });
}