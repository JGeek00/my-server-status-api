import fs from "fs/promises";

export const readAppVersion = async () => {
  try {
    const file = await fs.readFile("./package.json", "utf-8");
    return JSON.parse(file).version;
  } catch (error) {
    return false;
  }
};
