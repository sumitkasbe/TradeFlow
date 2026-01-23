import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";

const WatchListActions = ({ uid }) => {
    return (
        <span className="d-flex align-items-center gap-1">

            {/* Buy */}
            <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                <button className="btn btn-sm btn-success fw-semibold">
                    Buy
                </button>
            </Tooltip>

            {/* Sell */}
            <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
                <button className="btn btn-sm btn-danger fw-semibold" style={{backgroundColor: "#fd7e14"}}>
                    Sell
                </button>
            </Tooltip>

            {/* Analytics */}
            <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
                <button className="btn btn-sm btn-outline-secondary d-flex align-items-center" style={{color: "black", backgroundColor: "#cfe2ff"}}>
                    <BarChartOutlined fontSize="small" />
                </button>
            </Tooltip>

            {/* More */}
            <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                <button className="btn btn-sm btn-outline-dark d-flex align-items-center" style={{color: "black", backgroundColor: "#cfe2ff"}}>
                    <MoreHoriz fontSize="small" />
                </button>
            </Tooltip>

        </span>
    );
};

export default WatchListActions;
