import { Request, Response } from "express";
import { checkPackagesUpdates } from "../../controllers/checkPackagesUpdates";

const CheckPackagesUpdates = async (req: Request, res: Response) => {
  try {
    const result = await checkPackagesUpdates();
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

export default CheckPackagesUpdates;