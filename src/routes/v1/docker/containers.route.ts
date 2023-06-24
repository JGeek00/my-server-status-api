import { Request, Response } from "express";
import getDockerContainers from "../../../controllers/docker/containers.controller";

const ContainersRoute = async (req: Request, res: Response) => {
  try {
    const data = await getDockerContainers();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default ContainersRoute;