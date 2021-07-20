import './Header.scss';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';



const Header: FC = () => {

    const [menuIcon, setMenuIcon] = useState<boolean>(false);

    const navbar: string = menuIcon ? 'mobileNavbar' : 'desktopNavbar';


    return (
        <div className="header">
            <p className="portfolio">Portfolio</p>
            <ul className={navbar}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/edication">Education</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <MenuIcon onClick={(): void => setMenuIcon(!menuIcon)} className="menuIcon" />
        </div>
    )
}

export default Header;

