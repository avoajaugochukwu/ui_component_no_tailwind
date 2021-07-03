import vector from './img/curved_vector.svg'
import dot_element from './img/dot_element_2.svg'
import search_doctor from './img/search_doctor.svg'
import consultation from './img/consultation.svg'
import details_info from './img/details_info.svg'
import emergency_care from './img/emergency_care.svg'
import online_phamarcy from './img/online_phamarcy.svg'
import tracking from './img/tracking.svg'


function Services() {
  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold">Our Services</h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"></div>
        <p className="text-gray-500 mx-80 text-center">
          We provide to you the best choiches for you. Adjust it to your health needs and make
          sure your undergo treatment with our highly qualified doctors you can consult with us
          which type of service is suitable for your health
        </p>
      </div>
      <div className="bg-blue-900 relative mr-24">
        <img src={vector} alt="vector" className="absolute left-0 top-0 z-0" />
        <img src={dot_element} alt="dot_element" className="absolute right-24 top-56 z-0" />
      </div>
      <div className="flex flex-wrap mx-60">
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={search_doctor} alt="search_doctor" />
            <h3 className="font-semibold text-xl mb-3">Search doctor</h3>
            <p className="text-gray-500 h-20">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={consultation} alt="consultation" />
            <h3 className="font-semibold text-xl mb-3">Online pharmacy</h3>
            <p className="text-gray-500 h-20">Buy  your medicines with our mobile application with a simple delivery system</p>
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={details_info} alt="details_info" />
            <h3 className="font-semibold text-xl mb-3">Consultation</h3>
            <p className="text-gray-500 h-20">Free consultation with our trusted doctors and get the best recomendations</p>
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={emergency_care} alt="emergency_care" />
            <h3 className="font-semibold text-xl mb-3">Details info</h3>
            <p className="text-gray-500 h-20">Free consultation with our trusted doctors and get the best recomendations</p>
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={online_phamarcy} alt="online_phamarcy" />
            <h3 className="font-semibold text-xl mb-3">Emergency care</h3>
            <p className="text-gray-500 h-20">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className=" p-8 pt-10 rounded-lg shadow-lg bg-white">
            <img className="h-12 w-12 mb-6" src={tracking} alt="tracking" />
            <h3 className="font-semibold text-xl mb-3">Tracking</h3>
            <p className="text-gray-500 h-20">Track and save your medical history and health data </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="mx-auto border-2  border-blue-500 hover:bg-blue-500 hover:text-white text-sm mt-5 rounded-full px-8 py-2 text-blue-500 ">
          Learn more
        </button>
      </div>
    </>
  )
}

export default Services