import { Request, Response } from "express";
import shutdownMachine from "../../controllers/shutdown.controller";

const ShutdownRoute = async (req: Request, res: Response) => {
  const result = await shutdownMachine();
  if (result === true) {
    res.send('Success');
  }
  else {
    res.send('Error');
  }
}

export default ShutdownRoute;