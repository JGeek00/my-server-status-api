/* ------------ USAGE ------------ */
// Execute "npm run change-password -p [YOUR_PASSWORD]" to change the password"
// Execute "npm run change-password -r" to remove the password"

import { hashPassword } from "../utils/bcryptHash";
import defaultConfig from "../config/defaults.json"
import { readAuthFile, writeAuthFile } from "../utils/authFiles";

const args = process.argv;

const instructions = () => {
  console.warn(
    'Execute `npm run change-password -- -p "[YOUR_PASSWORD]"` to change the password.'
  );
  console.warn(
    "Execute `npm run change-password -- -r` to remove the password."
  );
};

const main = async () => {
  if (args.length > 4) {
    console.warn("You inputted too many arguments.");
    instructions();
  } else if (args.length <= 2) {
    console.warn("You inputted too few arguments.");
    instructions();
  } else {
    if (args[2] === "-p") {
      if (args[3] && args[3] !== "") {
        const file = await readAuthFile();
        if (!file) {
          console.error("ERROR: auth file is missing or corrupted.");
        } else {
          try {
            const hashedPwd = await hashPassword(args[3], process.env.SALT ? parseInt(process.env.SALT) : defaultConfig.salt)
            let jsonParsed = JSON.parse(file);
            
            jsonParsed.password = hashedPwd;
  
            const write = await writeAuthFile(JSON.stringify(jsonParsed));
            if (write) {
              console.log("Credentials set successfully.");
            } else {
              console.error("ERROR: cannot write auth file.");
            }
          } catch (error) {
            console.error(error);
          }
        }
      } else {
        console.warn("You have to provide the new password to set.");
        instructions();
      }
    } else if (args[2] === "-r") {
      const file = await readAuthFile();
      if (!file) {
        console.error("ERROR: auth file is missing or corrupted.");
      } else {
        try {
          let jsonParsed = JSON.parse(file);
          jsonParsed.password = "";

          const write = await writeAuthFile(JSON.stringify(jsonParsed));
          if (write) {
            console.log("Password removed successfully.");
          } else {
            console.error("ERROR: cannot write auth file.");
          }
        } catch (error) {
          console.error(error);
          console.error("ERROR: auth file format is invalid.");
        }
      }
    } else {
      console.error("Invalid argument provided.");
      instructions();
    }
  }
};

main();
