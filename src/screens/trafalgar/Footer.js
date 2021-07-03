import dot_element from './img/dot_element_2.svg'
import trafalgar from './img/Trafalgar.png'


function Footer() {
  return (
    <>
      <div className="relative">
        <img src={dot_element} alt="vector" className="absolute -left-6 top-52 z-0" />

        <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 rounded-lg relative mt-40 mx-60 text-white px-28">
          <img src={dot_element} alt="dot_element" className="absolute -right-24 -top-12 z-0" />
        </div>
        <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 px-48 z-50">
          <div className="flex py-20">
            <div className="w-2/5">
              <div>
                <p><span className="inline-block text-blue-400 text-center font-semibold text-2xl bg-white rounded-full w-8 h-8 mr-2">T</span>
                  <img className="inline" src={trafalgar} alt="trafalgar" />
                </p>
                <p className="text-white pr-40 pt-4">
                  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </p>
                <p className="text-white pt-6">
                  ©Trafalgar PTY LTD 2020. All rights reserved
                </p>
              </div>

            </div>
            <div className="w-1/5 text-white">
              <h4 className=" font-semibold text-xl">Company</h4>
              <div className="pt-4">
                <p className="pt-2">About</p>
                <p className="pt-2">Testimonials </p>
                <p className="pt-2">Find a doctor</p>
                <p className="pt-2">Apps</p>
              </div>
            </div>
            <div className="w-1/5 text-white">
              <h4 className=" font-semibold text-xl">Region</h4>
              <div className="pt-4">
                <p className="pt-2">Indonesia</p>
                <p className="pt-2">Singapore </p>
                <p className="pt-2">Hong kong</p>
                <p className="pt-2">Canada</p>
              </div>
            </div>
            <div className="w-1/5 text-white">
              <h4 className=" font-semibold text-xl">Help</h4>
              <div className="pt-4">
                <p className="pt-2">Help center</p>
                <p className="pt-2">Contact support </p>
                <p className="pt-2">Instructions</p>
                <p className="pt-2">How it works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer