import si, { Systeminformation } from "systeminformation";
import dataConfig from "../../config/data.json";

const getDockerImages = async () => {
  const {
    dockerImages,
  }: {
    dockerImages: Systeminformation.DockerImageData
  } = await si.get({
    dockerImages: dataConfig.docker.images.join(","),
  });

  return dockerImages;
};

export default getDockerImages;
