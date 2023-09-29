import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import {navLinks} from "../constants/index"
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute w-full z-10' >
      <nav className='flex justify-between items-center max-container' >
        <a href='/' >
          <img
          src={headerLogo}
          alt='logo'
          width={130}
          height={90}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden' >
          {
            navLinks.map((item,index)=>{
              return (
                <li key={item.label}
                value={index}
                >
                  <a
                    href={item.href}
                    className="font-montserrat text-lg text-slate-gray "
                    onClick={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })
          }
        </ul>
        <div className='hidden max-lg:block' >
          <img
          src={hamburger}
          alt='Hamburger'
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar