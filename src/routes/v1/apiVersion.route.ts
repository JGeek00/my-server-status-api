import { Request, Response } from "express";

const ApiVersionRute = async (req: Request, res: Response) => {
  res.send(process.env.npm_package_version);
}

export default ApiVersionRute;