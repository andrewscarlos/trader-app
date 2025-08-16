import axios from "./base.service";

const API_URL = "http://localhost:5000";

interface Databalance {
  available: string;
  onOrder: string;
  fiatEstimate: string;
}
export interface Balance {
  [key: string]: Databalance;
}
export async function getBalance(): Promise<Balance | null> {
  try {
    const response = await axios.get<Balance>(`${API_URL}/binance/balance`, {});
    if (!response?.data) {
      return null;
    }
    console.log("data", response.data);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return null;
    }
    return null;
  }
}
