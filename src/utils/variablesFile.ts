import fs from "fs/promises";

export const readVariablesFile = async () => {
  try {
    const file = await fs.readFile("./dist/config/variables.json", "utf-8");
    const parsed = JSON.parse(file);
    return parsed;
  } catch (error) {
    return false;
  }
};

export const writeVariablesFile = async (content: string) => {
  try {
    await fs.writeFile("./dist/config/variables.json", content, "utf-8");
    return true;
  } catch (error) {
    return false;
  }
};