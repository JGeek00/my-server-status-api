import fs from "fs";

export const readAuthFile = async () => {
  try {
    const file = await fs.promises.readFile("./dist/config/auth.json", "utf-8");
    return file;
  } catch (error) {
    return false;
  }
};

export const writeAuthFile = async (content: string) => {
  try {
    await fs.promises.writeFile("./dist/config/auth.json", content, "utf-8");
    return true;
  } catch (error) {
    return false;
  }
};