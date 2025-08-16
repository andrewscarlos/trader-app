import { useEffect, useRef, memo } from "react";

function CandleChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // limpa antes (ajuda no Strict Mode em DEV)
    container.innerHTML = "";

    // div onde o TradingView renderiza
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget divTradingView";
    widgetDiv.id = "tv-advanced-chart"; // <-- importante
    widgetDiv.style.height = "calc(100% - 32px)";
    widgetDiv.style.width = "100%";
    container.appendChild(widgetDiv);

    // script do widget
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.textContent = JSON.stringify({
      container_id: "tv-advanced-chart", // <-- aponta para o div acima
      allow_symbol_change: true,
      calendar: false,
      details: true,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "60",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: "BITSTAMP:BTCUSD",
      theme: "dark",
      timezone: "America/Sao_Paulo",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withdateranges: true,
      compareSymbols: [],
      studies: [],
      autosize: true,
    });

    container.appendChild(script);

    return () => {
      // desmonta completamente
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <div className="card cardDark border-0 shadow" style={{ height: 520 }}>
          <div className="card-body p2">
            <div
              className="tradingview-widget-container"
              ref={containerRef} // <-- corrige o ref
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CandleChart);
