import logo from "../assets/Images/disney-plus-logo.png";
import user from '../assets/Images/User-Avatar.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menu=[
        {name: 'HOME', icon:HiHome},
        {name: 'SEARCH', icon:HiMagnifyingGlass},
        {name: 'WATCH LIST', icon:HiPlus},
        {name: 'ORIGINALS', icon:HiStar},
        {name: 'MOVIES', icon:HiPlayCircle},
        {name: 'SERIES', icon:HiTv}
    ]

  return (
    <div className="flex items-center justify-between p-5 w-[100vw]">
        <div className="flex items-center gap-8">
            <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
                <div className="hidden md:flex gap-8">
                    {menu.map((item, i) => (
                        <HeaderItem key={i} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map((item, i) =>i<3&& (
                        <HeaderItem key={i} name={''} Icon={item.icon} />
                    ))}
                    <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
                      <HeaderItem name={''} Icon={HiDotsVertical} />
                      {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                        {menu.map((item, i) =>i>2&& (
                            <HeaderItem key={i} name={item.name} Icon={item.icon} />
                        ))} 
                      </div>:null}
                    </div>
                </div>
            </div>
        <img src={user} alt="" className="w-[40px] rounded-full"/>
    </div>
  );
};

export default Header;
