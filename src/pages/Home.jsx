import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx'
import Policy from '../components/Policy.jsx';


export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
       <Navbar/>
       <HeroSection/>
       <Policy/>
      </div>
    </div>
  )
}
