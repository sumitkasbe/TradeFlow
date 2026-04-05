import { useState, useEffect } from "react";
import axios, { all } from "axios";
import api from "../api/axios.js";
// import { positions } from "../data/data.js";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  // useEffect(() => {
  //     axios.get("http://localhost:8080/allPositions").then((res) => {
  //         // console.log(res.data);
  //         setAllPositions(res.data);
  //     });
  // }, []);

  useEffect(() => {
    api
      .get("/allPositions")
      .then((res) => setAllPositions(res.data))
      .catch(() => {
        window.location.href = (import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173") + "/userlogin";
      });
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="title">Positions ({allPositions.length})</h3>
        <div className="row">
          <table className="table table-sm table-hover align-middle text-muted ">
            <thead className="border-bottom">
              <tr className="text-muted">
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>

            <tbody>
              {allPositions.map((stock, indx) => {
                const curVal = stock.price * stock.qty;
                const pnl = curVal - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={indx}>
                    <td className="fw-semibold text-dark">{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td
                      className={
                        isProfit
                          ? "text-success fw-semibold"
                          : "text-danger fw-semibold"
                      }
                    >
                      {pnl.toFixed(2)}
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
      </div>
    </>
  );
};

export default Positions;
