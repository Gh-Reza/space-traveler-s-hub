import PropTypes from 'prop-types';

const Rocket = ({ data }) => (
  <div className="tbl-header">
    <div className="img-box"><img src={data.image} alt={data.name} /></div>
    <div className="content-container">
      <h3>falcon</h3>
      <p>{data.description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
  // <div>ehllp</div>
);

Rocket.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Rocket;
