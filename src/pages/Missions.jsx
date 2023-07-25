import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';
import '../css/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  console.log(isLoading);
  if (isLoading) {
    return (
      <div>
        <table className="missions-table">
          <tr>
            <th>
              Mission
            </th>
            <th className="description-column">
              Description
            </th>
            <th className="status-column">
              Status
            </th>
            <th className="button-column">  </th>
          </tr>
          {Object.values(missions)
            .flat()
            .map((mission, index) => (
              <tr key={Object.keys(missions)[index]}>
                <Mission mission={mission} />
              </tr>
            ))}
          ;
        </table>
        <p>
          {isLoading}
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2>
        Loadng...
      </h2>
    </div>
  );
};

export default Missions;
