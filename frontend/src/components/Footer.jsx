import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center px-10 pt-10 pb-6 bg-neutral text-primary">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-16 scale-100" fill="none"><path fill="#DEDBC0" d="M35.786 35.009c14.869-7.167-20.51 1.162 3.099-32.858C56.669.955 66.606 13.566 67.84 30.798c1.234 17.23-9.178 32.354-24.112 32.354-6.86-11.568-17.532-21.331-7.942-28.143Z" /><path fill="#29180F" d="M49.715 29.833c-.426 2.318-2.25 4.048-3.969 5.657-6.642 6.218-11.253 13.861-1.413 27.662-21.517 1.447-40.156-10.76-41.39-27.99C1.707 17.93 18.577 3.597 40.094 2.15c-14.341 10.19 11.774 15.96 9.62 27.682Z" /></svg>
                <p className="font-bold pt-6">Ekko Inc.</p>
                <p className="font-medium pb-6">Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid grid-flow-col gap-4">
                <a href='https://github.com/SamuelShally/ekko'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 scale-75 -ml-3 opacity-50" fill="#29180F"><path fill="#29180F" d="M41.954 56.833a2.583 2.583 0 0 1-2.583-2.583v-6.717a5.555 5.555 0 0 0-1.395-4.288 2.582 2.582 0 0 1 1.575-4.314c6.304-.75 12.116-2.764 12.116-13.692.002-2.04-.6-4.036-1.73-5.735a7.104 7.104 0 0 1-1.06-5.321 9.582 9.582 0 0 0 0-3.643 19.763 19.763 0 0 0-5.399 2.816 2.584 2.584 0 0 1-2.17.387 26.222 26.222 0 0 0-14.26 0 2.583 2.583 0 0 1-2.17-.387 19.117 19.117 0 0 0-5.45-2.816 9.096 9.096 0 0 0 0 3.643 7.336 7.336 0 0 1-1.112 5.373 10.514 10.514 0 0 0-1.73 5.76c0 10.05 4.856 12.737 12.141 13.667a2.585 2.585 0 0 1 2.119 1.705 2.583 2.583 0 0 1-.543 2.583 5.32 5.32 0 0 0-1.42 4.03v6.95a2.583 2.583 0 1 1-5.167 0v-1.473a15.5 15.5 0 0 1-13.615-5.4 10.077 10.077 0 0 0-2.996-2.273 2.587 2.587 0 1 1 1.291-5.012 12.736 12.736 0 0 1 5.167 3.514c2.583 2.583 5.167 4.856 10.075 3.926a10.05 10.05 0 0 1 .594-4.081c-5.321-1.344-12.916-5.167-12.916-18.084a15.5 15.5 0 0 1 2.583-8.602c.314-.47.434-1.044.336-1.602a14.7 14.7 0 0 1 .852-8.292 2.584 2.584 0 0 1 1.628-1.473c.878-.258 4.03-.775 9.997 3.1a31.413 31.413 0 0 1 14.7 0c5.967-3.875 9.119-3.384 9.971-3.1a2.584 2.584 0 0 1 1.628 1.473 14.752 14.752 0 0 1 .852 8.318 1.937 1.937 0 0 0 .284 1.473 15.5 15.5 0 0 1 2.584 8.628c0 13.097-7.544 16.895-12.917 18.083.473 1.386.666 2.853.568 4.314v6.562a2.583 2.583 0 0 1-2.428 2.583Z"/></svg>
                </a>
            </div>
        </footer>
    )
}


export default Footer;