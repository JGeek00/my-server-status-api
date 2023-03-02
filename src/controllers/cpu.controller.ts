import si from 'systeminformation';
import dataConfig from '../config/data.json';

const getCpuInfo = async () => {
  return await si.get({
    cpu: dataConfig.cpu.join(',')
  });
}

export default getCpuInfo;