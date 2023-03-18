import { Request, Response } from "express";
import { checkPackagesUpdates } from "../../controllers/checkPackagesUpdates";

const CheckPackagesUpdates = async (req: Request, res: Response) => {
  try {
    if (req.query.packageManager) {
      const result = await checkPackagesUpdates(req.query.packageManager as string);
      if (result.success) {
        res.json(result);
      }
      else {
        res.status(500).json(result);
      }
    } else {
      res.status(400).send("packageManager query parameter is missing");
    }
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

export default CheckPackagesUpdates;