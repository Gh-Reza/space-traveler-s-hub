import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image, onCh, isBooked,
}) => (
  <div className="rocket">
    <div className="img-box">
      <img src={image} alt={name} />
    </div>
    <div className="content-container">
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      {isBooked ? (
        <button onClick={() => onCh(id)} className="btn-outline" type="button">
          Cancel Reservation
        </button>
      ) : (
        <button onClick={() => onCh(id)} className="btnc" type="button">
          Reserve Rocket
        </button>
      )}
    </div>
  </div>
  // <div>ehllp</div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onCh: PropTypes.func.isRequired,
  isBooked: PropTypes.bool.isRequired,
};

export default Rocket;
