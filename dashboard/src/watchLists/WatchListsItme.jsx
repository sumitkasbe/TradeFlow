// import { Tooltip, Grow } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";


const WatchListItem = ({ stock }) => {
    const [showWatchListActions, setShowWatchListAction] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchListAction(true);
    }


    const handleMouseLeave = (e) => {
        setShowWatchListAction(false);
    }

    return (
        
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "text-danger fw-semibold" : "text-success fw-semibold"} >{stock.name}</p>
                <div className="itemInfo">
                    <span>{stock.percent}</span>

                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : (
                        <KeyboardArrowUp className="up" />
                    )}

                     <span
                        className={`fw-semibold ${
                            stock.isDown ? "text-danger" : "text-success"
                        }`}
                    >
                        {stock.price}
                    </span>
                </div>
            </div>
            { showWatchListActions && <WatchListActions uid={stock.name} /> }
        </li>
        
    );
}

export default WatchListItem;