import { Request, Response } from "express";
import getGeneralInfo from "../../controllers/generalInfo.controller";

const GeneralInfo = async (req: Request, res: Response) => {
  try {
    const data = await getGeneralInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default GeneralInfo;