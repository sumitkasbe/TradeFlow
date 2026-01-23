import { useState, useEffect } from "react";
import api from "../api/axios.js";
import { VerticalGraph } from "./VerticalGraph.jsx";

// import { holdings } from "../data/data.js";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    api
      .get("/allHoldings")
      .then((res) => setAllHoldings(res.data))
      .catch(() => {
        window.location.href = "http://localhost:5173/userlogin";
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "#1F77B4",
        borderRadius: 6,
        barThickness: 35,
      },
    ],
  };

  return (
    <>
      <div className="container mb-5">
        {/* Title */}
        <h3 className="fs-4 text-muted fw-semibold mb-4">
          Holdings ({allHoldings.length})
        </h3>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-sm table-hover align-middle text-muted ">
            <thead className="border-bottom">
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&amp;L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>

            <tbody>
              {allHoldings.map((stock, indx) => {
                const curVal = stock.price * stock.qty;
                const pnl = curVal - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={indx}>
                    <td className="fw-semibold text-dark">{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curVal.toFixed(2)}</td>

                    <td
                      className={
                        isProfit
                          ? "text-success fw-semibold"
                          : "text-danger fw-semibold"
                      }
                    >
                      {pnl.toFixed(2)}
                    </td>

                    <td className={isProfit ? "text-success" : "text-danger"}>
                      {stock.net}
                    </td>

                    <td
                      className={stock.isLoss ? "text-danger" : "text-success"}
                    >
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="row text-center mt-4">
          <div className="col">
            <h5 className="fw-semibold">
              29,875.<span className="fs-6">55</span>
            </h5>
            <p className="text-muted mb-0">Total Investment</p>
          </div>

          <div className="col">
            <h5 className="fw-semibold">
              31,428.<span className="fs-6">95</span>
            </h5>
            <p className="text-muted mb-0">Current Value</p>
          </div>

          <div className="col">
            <h5 className="fw-semibold text-success">1,553.40 (+5.20%)</h5>
            <p className="text-muted mb-0">P&amp;L</p>
          </div>
        </div>
      </div>
      <hr />
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
