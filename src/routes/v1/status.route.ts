import { Request, Response } from "express";
import getStatus from "../../controllers/status.controller";

const StatusRoute = async (req: Request, res: Response) => {
  try {
    const status = await getStatus();
    res.json(status);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default StatusRoute;
