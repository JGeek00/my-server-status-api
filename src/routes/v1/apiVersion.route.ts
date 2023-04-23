import { Request, Response } from "express";
import { readAppVersion } from "../../utils/readAppVersion";

const ApiVersionRute = async (req: Request, res: Response) => {
  const appVersion = await readAppVersion();
  res.send(`v${appVersion}`);
}

export default ApiVersionRute;