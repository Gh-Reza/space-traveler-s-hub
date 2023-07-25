import { useSelector } from 'react-redux';
import Mission from '../components/Mission';
import '../css/Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  if (!isLoading) {
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
