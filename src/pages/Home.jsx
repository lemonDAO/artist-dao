import HeroSection from '../components/HeroSection.jsx'
import Daos from '../components/Daos.jsx';
import LogoClouds from "../components/LogoClouds.jsx"
import YoutubeEmbed from "../components/Video.jsx"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
       <HeroSection/>
       <LogoClouds/>
       <YoutubeEmbed/>
       <Daos/>
      </div>
    </div>
  );
}
