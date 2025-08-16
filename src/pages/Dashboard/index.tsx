import { Wallet } from "../../components/Wallet/Wallet";
import { Base } from "../Base";
import { NewOrderButton } from "../Orders/NewOrderButton";
import CandleChar from "./CandleChar";
import { Ticker } from "./Ticker/Ticker";

export function Dashboard() {
  return (
    <Base>
      <div className="d-flex justify-content-between flex-wrap aliggn-itens-center py-4">
        <div className="d-bloc mb-4">
          <h1 className="h-4"> Dashboard!</h1>
        </div>
        <div className="btn-toolbar mb-b">
          <NewOrderButton />
        </div>
      </div>
      <CandleChar />
      <div className="row">
        <div className="col-6">
          <Ticker />
        </div>
        <div className="col-6">
          <Wallet />
        </div>
      </div>
    </Base>
  );
}
