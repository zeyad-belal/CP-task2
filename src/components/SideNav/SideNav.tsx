import { AiOutlineFileText, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { ImFilesEmpty } from 'react-icons/im';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PiShareNetworkBold } from 'react-icons/pi';
import { BsGear, BsListCheck, BsPeople } from 'react-icons/bs';
import  "./SideNav.css"


export default function SideNav() {
  return (
    <nav className='sideNav'>
      <div>
        <div className='Pic'></div>
          <AiOutlineHome className='homeIcon' size={20} />
          <BsListCheck size={20}  />
          <BsPeople size={20}  />
          <SlCalender size={20}  />
          <PiShareNetworkBold size={20}  />
          <AiOutlineFileText size={20}  />
          <ImFilesEmpty size={20}  />
          <AiOutlineHeart size={20}  />
          <MdKeyboardArrowLeft size={20}  />
        </div>
        <div className='lastTwo'>
          <BsGear size={20}  />
          <div className='PPic'></div>
        </div>
    </nav>
  )
}
