import { BsCoin } from "react-icons/bs";
import logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav className="bg-linear-85 from-cyan-600 to-blue-900">
            <div className="container mx-auto flex  justify-between px-25">
            <img src={logo} alt="" />

            <ul className="flex gap-4 items-center text-white">
                <li>Home</li>
                <li>Fixture</li>
                <li>Create-Team</li>
                <li>Schedule</li>
                <button className="btn btn-dash btn-info text-white font-bold"><li><span className="mr-2">0</span>Coin </li><BsCoin /></button>
                
            </ul>
        </div>
        </nav>
    );
};

export default Nav;