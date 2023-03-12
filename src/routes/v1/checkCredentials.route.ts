import { Request, Response } from "express";

const CheckCredentialsRoute = async (req: Request, res: Response) => {
  res.send('Credentials are valid.');
}

export default CheckCredentialsRoute;