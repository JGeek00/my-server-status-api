import si from 'systeminformation';
import dataConfig from '../config/data.json';

const getMemoryInfo = async () => {
  return await si.get({
    mem: dataConfig.memory.join(',')
  });
}

export default getMemoryInfo;