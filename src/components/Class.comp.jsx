import { ReactPropTypes } from "react";

const ClassItem = ({
  image = "",
  title = "",
  description = "",
  isAvailable = false,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" disabled={!isAvailable}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
