import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsslice';
import store from '../redux/store';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // const rockets = useSelector((store) => store.rockets);
  setTimeout(() => {
    console.log(store.getState());
  }, 3000);
  return (
    <section className="rockets">
      <h2>Rockets</h2>
    </section>
  );
};

export default Rockets;
