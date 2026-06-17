import Noimage from "../assets/noimage.png";

const Newsitems = (props) => {
  let { title, description, imgurl, newsurl, author, date, source } = props;

  return (
    <div className="newsitem">
      <div className="card rounded-3 border-0">
        <span className=" badge rounded-pill bg-danger d-flex justify-content-end position-absolute end-0">
          {source}
        </span>
        <img
          src={!imgurl ? Noimage : imgurl}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Noimage;
          }}
          className="card-img-top"
          alt="......."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsurl}
            target="_blank"
            className="btn btn-success w-100 mt-3 fw-semibold rounded-pill"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
