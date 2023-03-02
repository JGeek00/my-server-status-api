import getStorageInfo from "../../controllers/storage.controller";

const StorageRoute = async (req: any, res: any) => {
  try {
    const storage = await getStorageInfo();
    res.json(storage)
  } catch (error) {
    res.status(500).send()
  }
}

export default StorageRoute;