import { Request, Response } from "express";
import getCpuInfo from "../../controllers/cpu.controller";

const CpuRoute = async (req: Request, res: Response) => {
  try {
    const { cpu } = await getCpuInfo();
    res.json(cpu)
  } catch (error) {
    res.status(500).send();
  }
}

export default CpuRoute;