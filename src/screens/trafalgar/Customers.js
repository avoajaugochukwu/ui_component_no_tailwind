import dot_element from './img/dot_element.svg'
import customer_face from './img/customer_face.jpg'
import arrow_right from './img/iconfinder_4115224_arrow_right_blue.svg'
import arrow_left from './img/iconfinder_4829870_arrow_back_left_blue.svg'


function Customers() {
  return (
    <>
      <div className="relative">
        <img src={dot_element} alt="vector" className="absolute left-44 top-52 z-0" />

        <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 rounded-lg relative mt-40 mx-60 text-white px-28">
          <img src={dot_element} alt="dot_element" className="absolute right-5 top-5" />

          <div className="py-12">
            <h2 className="text-3xl text-center font-semibold">What our customer are saying</h2>
            <div className="h-0.5 my-4 bg-white w-10 mx-auto"></div>
            <div className="flex py-6">
              <div className="flex w-1/2">
                <div >
                  <img src={customer_face} alt="customer_face" className="rounded-full border-4" />
                </div>
                <div className="pt-10 pl-10">
                  <h4 className="font-semibold">Edward Newgate</h4>
                  <p className="font-light">Founder Circle</p>
                </div>
              </div>
              <div className="w-1/2 p-4 pt-6">
                <p className="font-extralight">
                  “Our dedicated patient engagement app and web portal allow you to access information
                  instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
                  </p>
              </div>

            </div>

          </div>

        </div>
        <div className="text-center pt-4">
          <img className="w-8 inline cursor-pointer" src={arrow_left} alt="arrow_left" />
          <span className="w-2 h-2 text-blue-300 font-black pl-10 px-1">&bull;</span>
          <span className="w-2 h-2 text-blue-400 font-black px-1">&bull;</span>
          <span className="w-2 h-2 text-blue-300 font-black px-1">&bull;</span>
          <span className="w-2 h-2 text-blue-300 font-black px-1 pr-10">&bull;</span>
          <img className="w-8 inline cursor-pointer" src={arrow_right} alt="arrow_right" />
        </div>
      </div>

    </>
  )
}

export default Customers