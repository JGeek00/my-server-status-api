import si from 'systeminformation';
import data from '../config/data.json';

const getSystemInfo = async () => {
  return await si.get({
    system: data.system.system.join(','),
    bios: data.system.bios.join(','),
    baseboard: data.system.baseboard.join(','),
    chassis: data.system.chassis.join(',')
  })
}

export default getSystemInfo;