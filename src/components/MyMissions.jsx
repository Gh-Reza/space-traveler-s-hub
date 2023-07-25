import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((store) => store.missions.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="my-missions">
      <h2 className="heading">My Missions</h2>
      {myMissions.map((myMission) => (
        <p className="my-mission" key={myMission.id}>{myMission.mission_name}</p>
      ))}
    </div>
  );
};

export default MyMissions;
