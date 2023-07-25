import MyMissions from '../components/MyMissions';
import MyRockets from '../components/MyRockets';
import '../css/MyProfile.css';

const MyProfile = () => (
  <main className="my-profile-container">
    <MyMissions />
    <MyRockets />
  </main>
);

export default MyProfile;
