import { Request, Response } from "express";
import getStorageInfo from "../../controllers/storage.controller";

const StorageRoute = async (req: Request, res: Response) => {
  try {
    const storage = await getStorageInfo();
    res.json(storage)
  } catch (error) {
    res.status(500).send()
  }
}

export default StorageRoute;