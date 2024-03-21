import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-dvh flex justify-center animate-fade">
      <div className="container_loader">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
