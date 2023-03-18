import { execShellCommand } from './../utils/execShellCommand';

export const checkPackageManager = async () => {
  const items: string[] = [];

  try {
    const results = await Promise.all([
      execShellCommand('which apt'),
      execShellCommand('which yum'),
      execShellCommand('which pacman')
    ]);
    
    if (results[0]) items.push('apt');
    if (results[1]) items.push('yum');
    if (results[2]) items.push('pacman');
  } catch (error) {
    // if error package manager not available
  }

  return items;
}