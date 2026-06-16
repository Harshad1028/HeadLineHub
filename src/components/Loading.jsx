import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="text-center my-5 d-flex flex-column align-items-center justify-content-center">
      <img src={loading} alt="loading..." style={{ width: "50px", height: "50px" }} />
      <h5 className="text-secondary mt-2 fw-medium">Fetching latest updates...</h5>
    </div>
  );
};

export default Loading;