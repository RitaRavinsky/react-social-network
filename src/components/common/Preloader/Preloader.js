import loader from "../../../assets/images/loader.svg"

const Preloader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Preloader;
