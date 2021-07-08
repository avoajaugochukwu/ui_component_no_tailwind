import React from 'react'
import { useHistory } from 'react-router-dom'
import arrow_white from '../img/iconfinder_4829869_arrow_next_right_icon_white.svg'
import arrow_black from '../img/iconfinder_4829869_arrow_next_right_icon_black.svg'
import figma from '../img/figma.png'
import react from '../img/React-icon.svg'


function Box(props) {
  const { bgColor, header, month, day, url, timeTaken } = props

  const history = useHistory()
   

  const handleClick = () => {
    history.push(`/${url}`)
  }

  return (
    <div className={`lg:w-1/3 md:w-1/2 w-full p-1 ${bgColor ? 'text-white' : 'text-black'} cursor-pointer`} onClick={handleClick}>
      <div className={`${bgColor ? 'bg-purple-900 hover:bg-purple-800 ' : 'bg-gray-200 hover:bg-gray-300'}`} >
        <div className="p-10 h-84">
          <div>
            <div>
              {month}
            </div>
            <div className="font-black">
              {day}
            </div>
          </div>
          <div className="font-semibold text-2xl pt-5 pb-10">
            {header}
          </div>
          <div className="flex">
            <a href="https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page" target="blank"><img className="w-12 h-12" src={figma} alt="figma" /></a>
            <img className="w-12 h-12 bg-white ml-2" src={react} alt="figma" />
          </div>
          <div className="flex justify-between pt-5">
            <div>
              <p>Figma to React</p>
              <p>{timeTaken}</p>
            </div>
            <div className="ml-10 r-0">
              <img src={`${bgColor ? arrow_white : arrow_black}`} className="arrow" alt="arrow" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Box