import './Certificates.scss';


import { FC } from 'react'
import certificates from '../certificates';

const Certificates: FC = () => {
    return (
        <div className="certificates">
            <h2>Certificates</h2>
            {certificates.map(certificate => {
                return (
                    <div>
                        <a href={certificate} target="_blank" rel="noreferrer"><img src={certificate} alt="img" /></a>
                        <p className="open">Open in new tab</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Certificates;
