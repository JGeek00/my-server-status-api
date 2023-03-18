import { Request, Response } from "express";
import { checkCredentialsController } from "../../controllers/checkCredentials.controller";

const CheckCredentialsRoute = async (req: Request, res: Response) => {
  try {
    const data = await checkCredentialsController();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default CheckCredentialsRoute;