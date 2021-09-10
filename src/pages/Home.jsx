import HeroSection from '../components/HeroSection.jsx'
import Policy from '../components/Daos.jsx';
import LogoClouds from "../components/LogoClouds.jsx"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
       <HeroSection/>
       <LogoClouds/>
       <Policy/>
      </div>
    </div>
  );
}
