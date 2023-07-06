import si, { Systeminformation } from "systeminformation";
import dataConfig from "../../config/data.json";

const getDockerInfo = async () => {
  const {
    dockerInfo,
  }: {
    dockerInfo: Systeminformation.DockerInfoData;
  } = await si.get({
    dockerInfo: dataConfig.docker.info.join(","),
  });

  return dockerInfo;
};

export default getDockerInfo;
