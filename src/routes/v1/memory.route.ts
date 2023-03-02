import getMemoryInfo from "../../controllers/memory.controller";

const MemoryRoute = async (req: any, res: any) => {
  try {
    const { mem } = await getMemoryInfo();
    res.json(mem)
  } catch (error) {
    res.status(500).send()
  }
}

export default MemoryRoute;