import { Request, Response } from "express";
import getSystemInfo from "../../controllers/system.controller";


const SystemRoute = async (req: Request, res: Response) => {
  try {
    const data = await getSystemInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default SystemRoute;