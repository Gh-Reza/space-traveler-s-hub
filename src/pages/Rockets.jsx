import { useDispatch, useSelector } from 'react-redux';
import { updateRockets } from '../redux/rockets/rocketsslice';
import Rocket from '../components/Rocket';
import '../css/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rockets.rockets);

  const handleClick = (id) => {
    dispatch(updateRockets(id));
  };

  return (
    <main className="rockets">
      {rockets.map((rocket) => (
        <Rocket
          isBooked={rocket.booked}
          onCh={handleClick}
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
        />
      ))}
    </main>
  );
};

export default Rockets;
