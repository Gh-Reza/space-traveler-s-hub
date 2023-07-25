import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((store) => store.rockets.rockets);
  const myRockets = rockets.filter((rocket) => rocket.booked === true);
  return (
    <div className="my-rockets">
      <h2 className="heading">My Rockets</h2>
      {myRockets.map((myRocket) => (
        <p className="my-rocket" key={myRocket.id}>{myRocket.name}</p>
      ))}
    </div>
  );
};

export default MyRockets;
