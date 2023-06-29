import Companies from './components/Companies';
import Everything from './components/Everything';
import FiverBussines from './components/FiverBussines';
import JoinFiver from './components/JoinFiver';
import PopularServices from './components/PopularServices';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverBussines />
      <JoinFiver />
    </>
  );
}
