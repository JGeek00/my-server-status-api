import { Request, Response } from "express";
import getNetworkInfo from "../../controllers/network.controller";

const NetworkRoute = async (req: Request, res: Response) => {
  try {
    const data = await getNetworkInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default NetworkRoute;