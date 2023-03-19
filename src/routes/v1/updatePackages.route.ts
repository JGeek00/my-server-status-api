import { Request, Response } from "express";
import { updatePackages } from '../../controllers/updatePackages.controller';
import { checkPackageManager } from './../../functions/checkPackageManager';

const UpdatePackages = async (req: Request, res: Response) => {
  try {
    if (req.query.packageManager) {
      const packageManagers = await checkPackageManager();
      if (packageManagers.includes(req.query.packageManager as string)) {
        const result = await updatePackages(req.query.packageManager as string);
        if (result) {
          res.json({
            'output': result
          });
        }
        else {
          res.status(500).send();
        }
      }
      else {
        res.status(500).send("The specified package manager is not available");
      }
    }
    else {
      res.status(400).send("packageManager query parameter not specified");
    }
  } catch (error) {
    res.status(500).send();
  }
}

export default UpdatePackages;