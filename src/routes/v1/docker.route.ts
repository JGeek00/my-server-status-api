import { Request, Response } from "express";
import getDockerInfo from "../../controllers/docker.controller";

const DockerRoute = async (req: Request, res: Response) => {
  try {
    const data = await getDockerInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default DockerRoute;