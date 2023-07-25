import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsslice';
import Rocket from '../components/Rocket';
import '../css/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rockets.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <main className="rockets">
      {rockets.map((rocket) => <Rocket key={rocket.id} data={rocket} />)}
    </main>
  );
};

export default Rockets;
