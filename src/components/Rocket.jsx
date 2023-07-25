import PropTypes from 'prop-types';

const Rocket = ({ data }) => (
  <div className="rocket">
    <div className="img-box"><img src={data.image} alt={data.name} /></div>
    <div className="content-container">
      <h3 className="name">{data.name}</h3>
      <p className="description">{data.description}</p>
      <button className="btnc" type="button">Reserve Rocket</button>
    </div>
  </div>
  // <div>ehllp</div>
);

Rocket.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Rocket;
