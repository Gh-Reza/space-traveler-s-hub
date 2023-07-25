import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsslice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rockets);
  console.log(rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <main className="rockets">
      <div className="tbl-header">
        <div>Mission</div>
        <div>Discription</div>
        <div>Status</div>
        <div> </div>
      </div>
    </main>
  );
};

export default Rockets;
