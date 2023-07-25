import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((store) => store.rockets.rockets);
  const myRockets = rockets.filter((rocket) => rocket.booked === true);
  return (
    <div className="my-rockets">
      {myRockets.map((myRocket) => (
        <p key={myRocket.id}>{myRocket.name}</p>
      ))}
    </div>
  );
};

export default MyRockets;
