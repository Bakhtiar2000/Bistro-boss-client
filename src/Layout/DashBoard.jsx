import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { RiUserSettingsFill } from 'react-icons/Ri';
import { AiOutlineMenu, AiFillShopping } from 'react-icons/ai';
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()

    //TODO: Load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaUtensils /> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><RiUserSettingsFill /> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook /> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                                
                            </> : <>
                                <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt /> Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/myCart'>
                                        <FaShoppingCart /> My Cart
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu /> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><AiFillShopping /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;