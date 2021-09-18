import nearLogo from '../images/nearLogo.png';
import sputnikDAO from '../images/sputnikDAO.png';

export default function LogoClouds() {
  return (
    <div className="bg-white border-b border-dark-gray">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <h2 className="max-w-md mx-auto text-3xl font-extrabold text-dark-gray text-center lg:max-w-xl lg:text-left">
        Infrastructure for Innovation
        </h2>
        <div className="flow-root self-center lg:ml-20 mt-8 lg:mt-0">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src={nearLogo}
                alt="Workcation"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
              <img className="h-14" src={sputnikDAO} alt="Tuple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    // <div className="bg-white border-b border-dark-gray">
    //   <div className="max-w-7xl mx-auto py-8 px-1 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-2">
    //       <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
    //         <img className="h-12" src={nearLogo} alt="Tuple" />
    //       </div>
    //       <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
    //         <img className="h-14" src={sputnikDAO} alt="Mirage" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
