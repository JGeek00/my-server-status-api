import { Request, Response } from "express";
import rebootMachine from "../../controllers/reboot.controller.ts";

const RebootRoute = async (req: Request, res: Response) => {
  const result = await rebootMachine();
  if (result === true) {
    res.send('Success');
  }
  else {
    res.send('Error');
  }
}

export default RebootRoute;