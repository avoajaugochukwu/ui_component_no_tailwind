import illustration_1 from './img/trafalgar-illustration sec02_1.svg'
import illustration_2 from './img/trafalgar-illustration sec03_1.svg'

function MiddleSections() {
  return (
    <>
      <div className="flex mt-44 mx-60">
        <div className="w-1/2">
          <img src={illustration_1} alt="illustration_1" />
        </div>

        <div className="w-1/2 pl-32 pt-32">
          <h4 className="text-4xl font-semibold">Leading healthcare providers</h4>
          <div className="h-0.5 my-6 bg-gray-900 w-10"></div>
          <p className="text-gray-500">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile
            and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
          </p>
          <button className="mx-auto border-2  border-blue-500 hover:bg-blue-500 hover:text-white text-sm mt-8 rounded-full px-8 py-2 text-blue-500 ">
            Learn more
        </button>
        </div>
      </div>
      {/*  */}
      <div className="flex mt-44 mx-60">
        <div className="w-1/2 pl-32 pt-32">
          <h4 className="text-4xl font-semibold pr-20">Download our mobile apps</h4>
          <div className="h-0.5 my-6 bg-gray-900 w-10"></div>
          <p className="text-gray-500">
            Our dedicated patient engagement app and web portal allow you to access information
            instantaneously (no tedeous form, long calls, or administrative hassle) and securely
          </p>
          <button className="mx-auto border-2  border-blue-500 hover:bg-blue-500 hover:text-white text-sm mt-8 rounded-full px-8 py-2 text-blue-500 ">
            Learn more
        </button>
        </div>
        <div className="w-1/2">
          <img src={illustration_2} alt="illustration_2" />
        </div>
      </div>
    </>
  )
}

export default MiddleSections