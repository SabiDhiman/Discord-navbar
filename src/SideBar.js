import {BsFillCloudHaze2Fill} from 'react-icons/bs'
import {RiBugFill} from 'react-icons/ri';
import {SiCoffeescript} from 'react-icons/si';
import  {BsLightningCharge} from 'react-icons/bs';

const SideBar=() => {


    return (
        <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:bg-gray-900 dark:text-white">
            <SideBarIcon icon={<BsFillCloudHaze2Fill size= "28"/>} />
            <Divider/>
            <SideBarIcon icon={<RiBugFill size= "28"/>} />
            <SideBarIcon icon={<SiCoffeescript size= "26" />} />
            <Divider/>
            <SideBarIcon icon={<BsLightningCharge size= "26" />} />
            


        </div>

    )}

    const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => {

        return(

            <div className="sideBarIcon group">
            {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
              {text}
            </span>
          </div>

        )




    }
      
    const Divider = () => <hr className="sidebar-hr" />;

    





export default SideBar; 
//w-16 based on tailwindcss element spacing 