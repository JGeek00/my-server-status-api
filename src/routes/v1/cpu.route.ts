import getCpuInfo from "../../controllers/cpu.controller";

const CpuRoute = async (req: any, res: any) => {
  try {
    const { cpu } = await getCpuInfo();
    res.json(cpu)
  } catch (error) {
    res.status(500).send();
  }
}

export default CpuRoute;