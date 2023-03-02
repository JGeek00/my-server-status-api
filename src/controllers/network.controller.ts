import si from 'systeminformation';
import data from '../config/data.json';

const getNetworkInfo = async () => {
  return await si.get({
    networkInterfaces: data.network.join(',')
  });
}

export default getNetworkInfo;