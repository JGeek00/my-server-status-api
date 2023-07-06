import { Request, Response } from "express";
import getDockerImages from "../../../controllers/docker/images.controller";

const ImagesRoute = async (req: Request, res: Response) => {
  try {
    const data = await getDockerImages();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default ImagesRoute;