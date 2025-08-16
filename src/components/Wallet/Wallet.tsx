import { useEffect, useState } from "react";
import { WalletRow } from "./WalletRow";
import { getBalance } from "../../services/exchange.service";

interface IBalance {
  available: string;
  onOrder: string;
  symbol: string;
}
export function Wallet() {
  const [balances, setBalances] = useState<IBalance[]>([]);
  const [fiat, setFiat] = useState();
  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await getBalance();
        if (!response) return;
        const r = Object.keys(response).map((item) => {
          if (item === "fiatEstimate") {
            // @ts-expect-error: passando Databalance para um setter tipado como undefined
            setFiat(response[item]);
          }
          const result = response[item];
          return {
            available: result.available,
            onOrder: result.onOrder,
            symbol: item,
          };
        });
        setBalances(r);
      } catch (error) {
        console.error("Erro ao buscar saldo:", error);
      }
    }

    fetchBalance();
  }, []);

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
                  COIN
                </th>
                <th className="border-bottom col-3" scope="col">
                  FREE
                </th>
                <th className="border-bottom col-3" scope="col">
                  LOCKED
                </th>
              </tr>
            </thead>
            <tbody>
              {balances?.map((item, index) => (
                <WalletRow
                  available={item.available}
                  onOrder={item.onOrder}
                  symbol={item.symbol}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 mb-4 ms-4">
          <b>Estimate:</b> {fiat}
        </div>
      </div>
    </div>
  );
}
