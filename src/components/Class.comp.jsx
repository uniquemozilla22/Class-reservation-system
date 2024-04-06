const ClassItem = ({
  image = "https://source.unsplash.com/random/",
  title,
  description,
  isAvailable = false,
}) => {
  return (
    <div className="card overflow-hidden bg-base-100 shadow-xl max-w-[30rem] max-h-[30rem]">
      <figure
        className="overflow-hidden"
        style={{ height: "500px", width: "500px" }}
      >
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
