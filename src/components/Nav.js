import figma from '../img/figma.png'
import react from '../img/React-icon.svg'

function Nav () {
  return (
    <nav className="border-b-2 border-b">
      <div className="flex container mx-auto">
        <div className="flex">
          <img className="h-12" src={figma} alt="figma" />
          <p className="pt-3 font-semibold">to</p>
          <img className="h-12" src={react} alt="react" />
        </div>
      </div>
    </nav>
  )
}

export default Nav