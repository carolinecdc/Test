import PropTypes from "prop-types";

export default function Cards({ imgURL, name, date, urlName }) {
  return (
    <div className="col cards-container">
      <div className="card shadow-sm img-card-container ">
        <a href={`/${urlName}`}>
          <img
            src={imgURL}
            alt={name}
            className="card-img"
            style={{ borderRadius: "0" }}
          />
        </a>
        <a href={`/${urlName}`}>
          <div className="cards-overlay ">
            <div className="cards-text-overlay">
              <h1 className="cards ">{name}</h1>
              <p className="cards-p">{date}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

Cards.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
};
