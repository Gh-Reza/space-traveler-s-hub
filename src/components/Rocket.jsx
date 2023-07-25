import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image, onCh,
}) => (
  <div className="rocket">
    <div className="img-box">
      <img src={image} alt={name} />
    </div>
    <div className="content-container">
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <button onClick={() => onCh(id)} className="btnc" type="button">
        Reserve Rocket
      </button>
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
};

export default Rocket;
