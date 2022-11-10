import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="border-solid border-y-primary border-t-2 border-opacity-20">
            <footer className="footer footer-center px-10 pt-6 pb-6 bg-neutral text-primary ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-30 h-20 scale-50 pl-36" fill="none"><path fill="#000" d="M19.14 49.6c-3.32 0-6.26-.68-8.82-2.04-2.52-1.4-4.5-3.3-5.94-5.7-1.4-2.44-2.1-5.24-2.1-8.4 0-2.48.4-4.74 1.2-6.78.8-2.04 1.92-3.8 3.36-5.28 1.44-1.52 3.14-2.68 5.1-3.48 2-.84 4.16-1.26 6.48-1.26 2.12 0 4.06.4 5.82 1.2 1.8.8 3.36 1.9 4.68 3.3 1.32 1.36 2.32 3 3 4.92.72 1.88 1.06 3.94 1.02 6.18l-.06 2.64H7.32l-1.44-5.1H26.7l-.9 1.02v-1.38c-.12-1.2-.52-2.26-1.2-3.18-.68-.96-1.56-1.7-2.64-2.22-1.04-.56-2.2-.84-3.48-.84-1.96 0-3.62.38-4.98 1.14-1.36.72-2.4 1.8-3.12 3.24-.68 1.44-1.02 3.22-1.02 5.34 0 2.04.42 3.82 1.26 5.34.88 1.52 2.12 2.7 3.72 3.54 1.6.84 3.46 1.26 5.58 1.26 1.48 0 2.84-.24 4.08-.72 1.28-.48 2.64-1.34 4.08-2.58l3.6 5.04c-1.08 1-2.32 1.86-3.72 2.58-1.36.68-2.8 1.22-4.32 1.62-1.52.4-3.02.6-4.5.6Zm27.176-10.26-1.38-6.96 15-15h9.78l-23.4 21.96ZM39.476 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L69.896 49h-9.12Zm20.52-9.66-1.38-6.96 15-15h9.781l-23.4 21.96ZM74.457 49V4.6h7.32V49h-7.32Zm21.3 0-11.58-14.04 5.16-4.44L104.878 49h-9.12Z"/><path fill="#DEDBC0" d="M121.006 34.21c7.182-3.56-9.907.576 1.497-16.316 8.59-.594 13.39 5.668 13.986 14.224.596 8.556-4.433 16.066-11.647 16.066-3.313-5.744-8.468-10.592-3.836-13.975Z"/><path fill="#000" d="M127.639 29.861c.651 2.266-1.548 4.11-3.074 5.907-2.437 2.869-3.53 6.505.57 12.416-10.394.718-19.397-5.343-19.993-13.899-.596-8.556 7.552-15.673 17.946-16.391-6.185 4.517 3.205 7.285 4.551 11.968Z"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-16 scale-100" fill="none"><path fill="#DEDBC0" d="M35.786 35.009c14.869-7.167-20.51 1.162 3.099-32.858C56.669.955 66.606 13.566 67.84 30.798c1.234 17.23-9.178 32.354-24.112 32.354-6.86-11.568-17.532-21.331-7.942-28.143Z" /><path fill="#29180F" d="M49.715 29.833c-.426 2.318-2.25 4.048-3.969 5.657-6.642 6.218-11.253 13.861-1.413 27.662-21.517 1.447-40.156-10.76-41.39-27.99C1.707 17.93 18.577 3.597 40.094 2.15c-14.341 10.19 11.774 15.96 9.62 27.682Z" /></svg> */}
                    <p className="font-bold pt-0">ekko Inc.</p>
                    <p className="font-medium pb-6">Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/SamuelShally/ekko'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 scale-75 -ml-3 opacity-50" fill="#29180F"><path fill="#29180F" d="M41.954 56.833a2.583 2.583 0 0 1-2.583-2.583v-6.717a5.555 5.555 0 0 0-1.395-4.288 2.582 2.582 0 0 1 1.575-4.314c6.304-.75 12.116-2.764 12.116-13.692.002-2.04-.6-4.036-1.73-5.735a7.104 7.104 0 0 1-1.06-5.321 9.582 9.582 0 0 0 0-3.643 19.763 19.763 0 0 0-5.399 2.816 2.584 2.584 0 0 1-2.17.387 26.222 26.222 0 0 0-14.26 0 2.583 2.583 0 0 1-2.17-.387 19.117 19.117 0 0 0-5.45-2.816 9.096 9.096 0 0 0 0 3.643 7.336 7.336 0 0 1-1.112 5.373 10.514 10.514 0 0 0-1.73 5.76c0 10.05 4.856 12.737 12.141 13.667a2.585 2.585 0 0 1 2.119 1.705 2.583 2.583 0 0 1-.543 2.583 5.32 5.32 0 0 0-1.42 4.03v6.95a2.583 2.583 0 1 1-5.167 0v-1.473a15.5 15.5 0 0 1-13.615-5.4 10.077 10.077 0 0 0-2.996-2.273 2.587 2.587 0 1 1 1.291-5.012 12.736 12.736 0 0 1 5.167 3.514c2.583 2.583 5.167 4.856 10.075 3.926a10.05 10.05 0 0 1 .594-4.081c-5.321-1.344-12.916-5.167-12.916-18.084a15.5 15.5 0 0 1 2.583-8.602c.314-.47.434-1.044.336-1.602a14.7 14.7 0 0 1 .852-8.292 2.584 2.584 0 0 1 1.628-1.473c.878-.258 4.03-.775 9.997 3.1a31.413 31.413 0 0 1 14.7 0c5.967-3.875 9.119-3.384 9.971-3.1a2.584 2.584 0 0 1 1.628 1.473 14.752 14.752 0 0 1 .852 8.318 1.937 1.937 0 0 0 .284 1.473 15.5 15.5 0 0 1 2.584 8.628c0 13.097-7.544 16.895-12.917 18.083.473 1.386.666 2.853.568 4.314v6.562a2.583 2.583 0 0 1-2.428 2.583Z"/></svg>
                    </a>
                </div>
            </footer>
        </div>
    )
}


export default Footer;