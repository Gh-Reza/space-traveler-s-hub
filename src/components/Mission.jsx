import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <>
    <td>
      {mission.mission_name}
    </td>
    <td>
      {mission.description}
    </td>
    <td>
      Not A Member
    </td>
    <td>
      <button type="button" className="join-btn">Join Mission</button>
    </td>
  </>
);

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
};
export default Mission;
