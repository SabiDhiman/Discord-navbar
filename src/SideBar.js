import {BsFillCloudHaze2Fill} from 'react-icons/bs'
import {RiBugFill} from 'react-icons/ri';
import {SiCoffeescript} from 'react-icons/si';
import  {BsLightningCharge} from 'react-icons/bs';

const SideBar=() => {


    return (
        <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<BsFillCloudHaze2Fill size= "28"/>} />
            <SideBarIcon icon={<RiBugFill size= "28"/>} />
            <SideBarIcon icon={<SiCoffeescript size= "26" />} />
            <SideBarIcon icon={<BsLightningCharge size= "26" />} />
            


        </div>
    );
}

const SideBarIcon = ({icon}) => {
    return(
<div className = "sideBarIcon">
    {icon}
</div>
    )}

    





export default SideBar; 
//w-16 based on tailwindcss element spacing 