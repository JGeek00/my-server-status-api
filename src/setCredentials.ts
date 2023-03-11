/* ------------ USAGE ------------ */
// Execute `npm run set-credentials -- -u "[YOUR_USERNAME]" -p "[YOUR_PASSWORD]"` to set your credentials"
// Example: npm run set-credentials -- -u "my_user" -p "pass1234"

import fs from "fs/promises";
import { hashPassword } from "./utils/bcryptHash";
import defaultConfig from "./config/defaults.json"

const args = process.argv;

const instructions = () => {
  console.warn(
    'Execute `npm run set-credentials -- -u "[YOUR_USERNAME]" -p "[YOUR_PASSWORD]"` to set your credentials.'
  );
};

const readAuthFile = async () => {
  try {
    const file = await fs.readFile("./dist/config/auth.json", "utf-8");
    return file;
  } catch (error) {
    return false;
  }
};

const writeAuthFile = async (content: string) => {
  try {
    await fs.writeFile("./dist/config/auth.json", content, "utf-8");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const main = async () => {
  if (args.length > 6) {
    console.warn("You inputted too many arguments.");
    instructions();
  } else if (args.length <= 5) {
    console.warn("You inputted too few arguments.");
    instructions();
  } else {
    if (args[2] === "-u" && args[4] === "-p") {
      if (args[3] === "") {
        console.error("Username cannot be empty.");
        instructions();
      }
      else if (args[5] === "") {
        console.error("Password cannot be empty.");
        instructions();
      }
      else {
        const file = await readAuthFile();
        if (!file) {
          console.error("Auth file doesn't exist. Will be created.");
          try {
            const hashedPwd = await hashPassword(args[5], process.env.SALT ? parseInt(process.env.SALT) : defaultConfig.salt)
            
            const authConfig = {
              username: args[3],
              password: hashedPwd
            }
  
            const write = await writeAuthFile(JSON.stringify(authConfig));
            if (write) {
              console.log("Credentials set successfully.");
            } else {
              console.error("ERROR: cannot write config file.");
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            const hashedPwd = await hashPassword(args[5], process.env.SALT ? parseInt(process.env.SALT) : defaultConfig.salt)
            let jsonParsed = JSON.parse(file);
            
            jsonParsed.username = args[3];
            jsonParsed.password = hashedPwd;
  
            const write = await writeAuthFile(JSON.stringify(jsonParsed));
            if (write) {
              console.log("Credentials set successfully.");
            } else {
              console.error("ERROR: cannot write config file.");
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    } else if (args[2] === "-p" && args[4] === "-u") {
      if (args[3] === "") {
        console.error("Password cannot be empty.");
        instructions();
      }
      else if (args[5] === "") {
        console.error("Username cannot be empty.");
        instructions();
      }
      else {
        // DO STUFF
      }
    } else {
      console.error("Invalid arguments provided.");
      instructions();
    }
  }
};

main();
