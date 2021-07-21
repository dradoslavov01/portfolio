import './Contacts.scss'

import { FC } from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contacts: FC = () => {
    return (
        <div className="contacts">
            <h2>Contacts</h2>
            <div className="content">
                <div>
                    <PhoneIcon className="icon" />
                    <p>+359897501725</p>
                </div>
                <div>
                    <EmailIcon className="icon" />
                    <p>daniradoslavov91@gmail.com</p>
                </div>
                <div>
                    <GitHubIcon className="icon" />
                    <a href="https://github.com/dradoslavov01" target="_blank" rel="noreferrer">https://github.com/dradoslavov01</a>
                </div>
                <div>
                    <LinkedInIcon className="icon" />
                    <a href="https://www.linkedin.com/in/yordan-yordanov-513683156/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/yordan-yordanov-513683156/</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts
