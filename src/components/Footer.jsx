import React from 'react';
import FooterImage from "../assets/Footer.svg";

function Footer(props) {
    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-[50rem]' src={FooterImage} alt="" />
            </div>
        </div>
    );
}

export default Footer;