import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getDockerInfo = async () => {
  const {
    dockerInfo,
    dockerAll
  }: {
    dockerInfo: Systeminformation.DockerInfoData;
    dockerAll: Systeminformation.DockerInfoData
  } = await si.get({
    dockerInfo: dataConfig.docker.info.join(","),
    dockerAll: dataConfig.docker.all.join(",")
  });

  return {
    info: dockerInfo,
    containers: dockerAll
  };
};

export default getDockerInfo;
