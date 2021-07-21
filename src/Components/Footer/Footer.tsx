import './Footer.scss';

import { FC } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer: FC = () => {
    return (
        <div className="footer">
            <p>&copy; Yordan Yordanov 2021</p>
            <div className="social-media-icons">
                <a href="https://github.com/dradoslavov01" target="_blank"><GitHubIcon className="icons" /></a>
                <a href="https://www.linkedin.com/in/yordan-yordanov-513683156/" target="_blank"><LinkedInIcon className="icons" /></a>
            </div>
        </div>
    )
}

export default Footer
