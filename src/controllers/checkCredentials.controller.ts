import { getBasicOsInfo } from "../functions/getBasicOsInfo";

export const checkCredentialsController = async () => {
  return await getBasicOsInfo();
}