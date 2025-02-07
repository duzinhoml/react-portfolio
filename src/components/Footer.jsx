import React from 'react';

function Footer() {

    return(
        <div class="position-absolute top-200 start-50 translate-middle ">
            <a href='https://github.com/duzinhoml' target='_blank' class='mx-3'>
                <span>GitHub</span>
            </a>
            <a href='https://www.linkedin.com/feed/' target='_blank' class='mx-3'>
                <span>LinkedIn</span>
            </a>
            <a href='https://x.com/?lang=en' target='_blank' class='mx-3'>
                <span>Twitter</span>
            </a>
        </div>
    );
};

export default Footer;