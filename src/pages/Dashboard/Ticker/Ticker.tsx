import { useState } from "react";
import useWebSocket from "react-use-websocket";
import { TickerRow, type TickerData } from "./TickerRow";
const TOP_COINS = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "XRPUSDT",
  "PEPEUSDT",
  "DOGEUSDT",
  "BNBUSDT",
  "ADAUSDT",
  "TRXUSDT",
  "SUIUSDT",
];
interface TickerDataBinance {
  [key: string]: TickerData;
}
const BWS_URL = "wss://stream.binance.com:9443";
export function Ticker() {
  const [ticker, setTicker] = useState<TickerDataBinance>({});
  const streams = TOP_COINS.map((coin) => `${coin.toLowerCase()}@ticker`).join(
    "/"
  );
  const { lastJsonMessage } = useWebSocket<TickerDataBinance>(`${BWS_URL}/stream`, {
    onOpen: () => console.log("WebSocket connection established"),
    onMessage: () => {
      if (!lastJsonMessage) return;
      setTicker((prev) => ({
        ...prev,
        [lastJsonMessage.data.s]: lastJsonMessage.data,
      }));
     
    },
    queryParams: { streams },
    onError: (error) => console.error("WebSocket error:", error),
    shouldReconnect: () => true,
    reconnectInterval: 60000,
  });
  return (
    <div className="col-12">
      <div className="card border-0 shadow">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h2 className="fs-5 fw-bold mb-0"></h2>
            </div>
          </div>
        </div>
        <div className="table-responsive divScroll">
          <table className="table align-itens-center table-flush table-sm table-hover tableFixHead">
            <thead className="thead-light ">
              <tr>
                <th className="border-bottom" scope="col">
                  SYMBOL
                </th>
                <th className="border-bottom col-2" scope="col">
                  PRICE NOW
                </th>
                <th className="border-bottom col-2" scope="col">
                  YESTERDAY
                </th>
                <th className="border-bottom col-2" scope="col">
                  HIGHT
                </th>
                <th className="border-bottom col-2" scope="col">
                  LOW
                </th>
              </tr>
            </thead>
            <tbody>
              {TOP_COINS.map((item) => (
                <TickerRow key={item} symbol={item} data={ticker[item]} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-4 mt-3"> Data Sumary from last 24h to now.</div>
      </div>
    </div>
  );
}
