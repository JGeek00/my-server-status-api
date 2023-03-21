import { Request, Response } from "express";
import { getOsInfo } from './../../controllers/os.controller';

const OsRoute = async (req: Request, res: Response) => {
  try {
    const data = await getOsInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default OsRoute;