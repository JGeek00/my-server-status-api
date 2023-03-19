import { checkPackageManager } from './../../functions/checkPackageManager';
import { Request, Response } from "express";

const PackageManagers = async (req: Request, res: Response) => {
  try {
    const data = await checkPackageManager();
    if (typeof data === 'string') {
      res.send(data);
    }
    else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).send()
  }
}

export default PackageManagers;