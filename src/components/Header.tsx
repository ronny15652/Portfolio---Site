//  images
import Logo from '../assets/logo.svg';


export default function Header(){
  return(
    <header className='py-8 '>
      <div className="container mx-auto">
        <div className="flex justify-between items-center " >
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="logo" className=""/>
          </a>
          <button className="btn btn-sm">
            Trabalhe comigo!
          </button>
        </div>
      </div>
    </header>
  ) 
};