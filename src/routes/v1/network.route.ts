import getNetworkInfo from "../../controllers/network.controller";


const NetworkRoute = async (req: any, res: any) => {
  try {
    const data = await getNetworkInfo();
    res.json(data)
  } catch (error) {
    res.status(500).send();
  }
}

export default NetworkRoute;