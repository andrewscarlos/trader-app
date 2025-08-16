import { useMemo } from "react";

export interface TickerData {
  c: string;
  o: string;
  h: string;
  l: string;
  s: string;
}
interface TickerRowProps {
  symbol: string;
  data: TickerData;
}
export function TickerRow({ data, symbol }: TickerRowProps) {
  const row = useMemo(() => {
    if (!symbol || !data) return null;

    const c = (data.c ?? "").slice(0, 8);
    const o = (data.o ?? "").slice(0, 8);
    const h = (data.h ?? "").slice(0, 8);
    const l = (data.l ?? "").slice(0, 8);

    function getClassName() {
      return parseFloat(c) > parseFloat(o)
        ? "text-success fw-bold"
        : "text-danger fw-bold";
    }
    return (
      <tr>
        <td className="text-gray-900 fw-bold">{symbol.toUpperCase()}</td>
        <td className={getClassName()}>{c}</td>
        <td className="text-gray-900">{o}</td>
        <td className="text-gray-900">{h}</td>
        <td className="text-gray-900">{l}</td>
      </tr>
    );
  }, [data]);
  return row;
}
