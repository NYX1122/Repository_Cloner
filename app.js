import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCallback);

export default async function (url, packageName) {
  const cloneCmd = `git clone ${url} ../${packageName}`;
  try {
    const { stdout, stderr } = await exec(cloneCmd);
    console.log('Repository_Cloner successfully cloned the repository:');
    console.log(packageName);
  } catch (error) {
    console.error('Repository_Cloner encountered an error:');
    console.error(error);
  }
}
