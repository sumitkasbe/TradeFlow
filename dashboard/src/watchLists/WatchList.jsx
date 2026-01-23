import { watchlist } from "../data/data";
import WatchListItem from "./WatchListsItme";
import { DoughnutChart } from "../components/DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "#1F77B4",
          "#FF7F0E",
          "#2CA02C",
          "#D62728",
          "#9467BD",
          "#8C564B",
          "#17BECF",
          "#BCBD22",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="container watchlist-container">
      <div className="row">
        <div className="col-12">
          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
              className="search"
            />
            <span className="counts">{watchlist.length} / 50</span>
          </div>

          {/* Watchlist */}
          <ul className="list">
            {watchlist.map((stock, indx) => (
              <WatchListItem stock={stock} key={indx} />
            ))}
          </ul>

          {/* Doughnut Chart BELOW watchlist */}
          <div className="mt-4">
            <DoughnutChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
