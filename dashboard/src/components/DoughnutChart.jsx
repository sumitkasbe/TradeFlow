import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

//  REQUIRED for Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  // safety check
  if (!data || !data.labels?.length) return null;

  return (
    <div style={{ width: "350px", margin: "auto" }}>
      <Doughnut data={data} />
    </div>
  );
}
