/* ------------ USAGE ------------ */
// Execute "npm run change-password -p [YOUR_PASSWORD]" to change the password"
// Execute "npm run change-password -r" to remove the password"

import fs from "fs/promises";

const args = process.argv;

const instructions = () => {
  console.warn(
    "Execute `npm run change-password -- -p [YOUR_PASSWORD]` to change the password."
  );
  console.warn(
    "Execute `npm run change-password -- -r` to remove the password."
  );
};

const readConfigFile = async () => {
  try {
    const file = await fs.readFile("./dist/config/api.json", "utf-8");
    return file;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const writeConfigFile = async (content: string) => {
  try {
    await fs.writeFile("./dist/config/api.json", content, "utf-8");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
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
        const file = await readConfigFile();
        if (!file) {
          console.error("ERROR: config file api.json is missing or corrupted.");
        } else {
          // TODO change password
        }
      } else {
        console.warn("You have to provide the new password to set.");
        instructions();
      }
    } else if (args[2] === "-r") {
      const file = await readConfigFile();
      if (!file) {
        console.error("ERROR: config file api.json is missing or corrupted.");
      } else {
        try {
          let jsonParsed = JSON.parse(file);
          jsonParsed.password = "";

          const write = await writeConfigFile(JSON.stringify(jsonParsed));
          if (write) {
            console.log("Password removed successfully.");
          } else {
            console.error("ERROR: cannot write config file.");
          }
        } catch (error) {
          console.error(error);
          console.error("ERROR: config file format is invalid.");
        }
      }
    } else {
      console.error("Invalid argument provided.");
      instructions();
    }
  }
};

main();
