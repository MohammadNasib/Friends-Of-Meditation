import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaTimes, FaShoppingCart } from 'react-icons/fa';
import '../styles/navbar.scss';

export default function NavBar() {
    const menuRef = useRef();
    const dropdownRef = useRef();

    function openMenu() {
        menuRef.current.style.left = '0';
    }

    function closeMenu() {
        menuRef.current.style.left = '-80%';
    }

    function showHideDropdown() {
        dropdownRef.current.classList.toggle('show');
    }

    return (
        <header className='navbar'>
            <div className='logo '>
                <NavLink to='/' className='fw-500'>
                    FOM
                </NavLink>
            </div>

            <div className='menu' ref={menuRef}>
                <ul className='navLinks'>
                    <FaTimes className='closeIcon pointer' onClick={closeMenu} />

                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/' className='pointer' onClick={showHideDropdown}>
                            Products <FaChevronDown className='dropdownIcon' />
                        </NavLink>

                        <div className='dropdown' ref={dropdownRef}>
                            <li>
                                <NavLink to='mediChairs'>Meditation Chairs</NavLink>
                            </li>

                            <li>
                                <NavLink to='mediCushions'>Meditation Cushions</NavLink>
                            </li>

                            <li>
                                <NavLink to='/'>More</NavLink>
                            </li>
                        </div>
                    </li>

                    <li>
                        <NavLink to='/'>About</NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>Contact</NavLink>
                    </li>

                    <li>
                        <FaShoppingCart className='shoppingCart pointer' />
                    </li>
                </ul>
            </div>

            <FaBars className='menuIcon pointer' onClick={openMenu} />
        </header>
    );
}
