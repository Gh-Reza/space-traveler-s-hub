import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, updateRockets } from '../redux/rockets/rocketsslice';
import Rocket from '../components/Rocket';
import '../css/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rockets.rockets);

  const handleClick = (id) => {
    const newArr = rockets.map((rocket) => {
      if (rocket.id === id) {
        return {
          ...rocket,
          booked: true,
        };
      }
      return rocket;
    });
    dispatch(updateRockets(newArr));
  };

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
