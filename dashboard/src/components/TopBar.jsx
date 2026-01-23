import Menu from './Menu';

const TopBar = () => {
  return (
    <div className="topbar-container" style={{width : "100%"}}>
      <div className="indices-container" style={{gap : "50px"}}>
        <div className="nifty">
          <p className="index ">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
}

export default TopBar;