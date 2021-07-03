import vector from './img/curved_vector_right.svg'
import dot_element from './img/dot_element_2.svg'
import article_doctor from './img/article_doctor.jpg'
import article_facial from './img/article_facial.jpg'
import article_microscope from './img/article_microscope.jpg'
import arrow from './img/iconfinder_4115224_arrow_right_blue.svg'

function Articles() {
  return (
    <>
      <div className="pt-48">
        <h2 className="text-3xl text-center font-semibold">Check out our latest article</h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"></div>
      </div>
      <div className="relative">
        <img src={vector} alt="vector" className="absolute right-0 -top-40 z-0 " />
        <div className=" relative">

          <img src={dot_element} alt="dot_element" className="absolute left-52 -top-6 z-0" />

          <div className="flex mx-60">
            <div className="w-1/3 p-5 z-50">
              <div className=" rounded-3xl shadow-lg bg-white">
                <img className="rounded-t-3xl" src={article_doctor} alt="article_doctor" />
                <div className="p-6 h-56">
                  <h4 className="pb-4 pr-10 font-semibold">Disease detection, check up in the laboratory</h4>
                  <p className="text-gray-500">In this case, the role of the health laboratory is very important to do a disease detection...</p>

                  <p className="text-blue-400 pt-4 cursor-pointer hover:text-blue-500">Read more <img className="inline w-6" src={arrow} alt="arrow" /> </p>
                </div>

              </div>
            </div>
            <div className="w-1/3 p-5 z-50">
              <div className=" rounded-3xl shadow-lg bg-white">
                <img className="rounded-t-3xl" src={article_microscope} alt="article_microscope" />
                <div className="p-6 h-56">
                  <h4 className="pb-4 pr-10 font-semibold">Herbal medicines that are safe for consumption</h4>
                  <p className="text-gray-500">Herbal medicine is very widely used at this time because of its very good for your health...</p>

                  <p className="text-blue-400 pt-4 cursor-pointer hover:text-blue-500">Read more <img className="inline w-6" src={arrow} alt="arrow" /> </p>
                </div>

              </div>
            </div>
            <div className="w-1/3 p-5 z-50">
              <div className=" rounded-3xl shadow-lg bg-white">
                <img className="rounded-t-3xl" src={article_facial} alt="article_facial" />
                <div className="p-6 h-56">
                  <h4 className="pb-4 pr-10 font-semibold">Natural care for healthy facial skin</h4>
                  <p className="text-gray-500">A healthy lifestyle should start from now and also for your skin health. There are some...</p>

                  <p className="text-blue-400 pt-4 cursor-pointer hover:text-blue-500">Read more <img className="inline w-6" src={arrow} alt="arrow" /> </p>
                </div>

              </div>
            </div>
          </div>
          <div className="text-center">
          <button className="mx-auto border-2  border-blue-500 hover:bg-blue-500 hover:text-white text-sm mt-8 rounded-full px-12 py-2 text-blue-500 ">
            View all
        </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Articles