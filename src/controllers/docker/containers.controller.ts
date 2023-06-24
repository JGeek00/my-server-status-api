import si, { Systeminformation } from "systeminformation";
import dataConfig from "../../config/data.json";

const getDockerContainers = async () => {
  const {
    dockerContainers
  }: {
    dockerContainers: Systeminformation.DockerContainerData
  } = await si.get({
    dockerContainers: dataConfig.docker.containers.join(","),
  });

  return dockerContainers;
};

export default getDockerContainers;
