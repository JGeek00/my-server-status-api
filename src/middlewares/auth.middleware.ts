import { NextFunction, Request, Response } from "express";
import { readAuthFile } from "../utils/authFiles";
import { decodeBase64 } from "../utils/base64Hash";
import { verifyPassword } from "../utils/bcryptHash";

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const authObj = await readAuthFile();

  if (authObj && token) {
    try {
      const authJson = JSON.parse(authObj);

      if (authJson.username && authJson.password) {
        const hashDecoded = decodeBase64(token.replace("Bearer ", ""));

        const split = hashDecoded.split(":");
        const user = split[0];
        const passwd = split.slice(1).join();

        if (user && passwd) {
          const pwdValid = await verifyPassword(passwd, authJson.password);
          if (user === authJson.username && pwdValid) {
            console.log("Token valid", req.path, new Date().toTimeString());
            next();
          } else {
            res.status(401).send("Authentication token is not valid.");
          }
        } else {
          res.status(401).send("Authentication token is not valid.");
        }
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send("Error: auth file has an invalid format or it's corrupted");
    }
  } else if (authObj && !token) {
    try {
      const json = JSON.parse(authObj);
      if (json.password) {
        res.status(401).send("Authentication token is missing.");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error: cannot read auth file.");
    }
  } else {
    next();
  }
};
