import hero from './img/trafalgar-header illustration 1.png'
import dot_element from './img/dot_element.svg'

function Hero() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div>
          <img src={dot_element} alt="dot_element" />
        </div>
        <div className="ml-52 mr-36">
          <h1 className="font-bold text-5xl mb-10">Virtual healthcare for you</h1>
          <p>Trafalgar provides progressive, and affordable healthcare accessible on mobile and online for everyone</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-sm text-white mt-5 rounded-full px-8 py-3 ">
            Consult today
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mr-52">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero