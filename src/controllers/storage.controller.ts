import si from 'systeminformation';
import dataConfig from '../config/data.json';

const getStorageInfo = async () => {
  return await si.get({
    diskLayout: dataConfig.storage.diskLayout.join(','),
    fsSize: dataConfig.storage.fsSize.join(',')
  });
}

export default getStorageInfo;