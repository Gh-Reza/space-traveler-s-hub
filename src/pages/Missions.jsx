import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/miissionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
    <div>
      <h2>
        Missions
      </h2>
      <p>{missions}</p>
    </div>;
};

export default Missions;
