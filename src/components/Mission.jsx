import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const { mission_name: missionName, description, reserved } = mission;

  const handleJoinMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  return (
    <>
      <td>{missionName}</td>
      <td>{description}</td>
      <td><span className={reserved ? 'status-active' : 'status-not-active'}>{reserved ? 'Active Member' : 'Not A Member'}</span></td>
      <td>
        <button type="button" onClick={handleJoinMission} className={reserved ? 'leave-btn' : 'join-btn'}>
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
};
export default Mission;
