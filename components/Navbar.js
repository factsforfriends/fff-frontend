import React, { useState } from "react";
import Link from "next/link";
import sortBy from 'lodash/sortBy'
import { BACKEND_URL } from "../constants/urls";

const Navbar = ( ) => {
    // Handle toggle category button
    const [showCategories, setShowCateogies] = useState(false);
    const toggleCategories = () => setShowCateogies(!showCategories);

    // Get categories with available Snacks
    const categories = [
      {'id': 1, 'name': 'Alltag'}, 
      {'id': 2, 'name': 'Pandemie'}, 
      {'id': 3, 'name': 'Krankheit'},
      {'id': 4, 'name': 'Ansteckung'},
      {'id': 5, 'name': 'Ausmass'},
      {'id': 6, 'name': 'Symptome'},
      {'id': 7, 'name': 'Politik'}
    ];

    return(
        <div className="bg-gray-300 text-gray-800">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center text-sm">
              <button onClick={toggleCategories}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 fill-current text-gray-800">
                  <path d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <Link as={`/`} href={`/`}>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.14 95.2" className="h-8 w-8 fill-current text-gray-800 inline">
                  <defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_1-2-2" data-name="Layer 1-2"><ellipse cx="33.1" cy="91.76" rx="4.15" ry="2.44" strokeMiterlimit="10" strokeWidth="2" stroke="#3a3a3a" fill="#c1c1c1"/><path d="M34 1h-1.84C5.88 2.09-8.65 31.39 8.27 51.39c16.5 15.35 9.56 8.53 15.58 28.36h18.39c6-19.81-.9-13.09 15.6-28.36C74.82 31.44 60.26 2.14 34 1z" fill="none" strokeMiterlimit="10" strokeWidth="2" stroke="#3a3a3a"/><path d="M30.88 78.6Q29.41 60.06 28 41.49c-1.47-18.56-11.73-7.71-.29-12.08s4.07 12.08 4.07 12.08H34"/><path d="M35.83 79q1.08-18.76 2.11-37.54c1.05-18.77 11.73-7.71.3-12.08s-4.15 12.08-4.15 12.08h-2.36"/><circle cx="26.53" cy="24.02" r="3.45"/><circle cx="39.89" cy="24.02" r="3.45"/><path d="M42.48 79H23.71L26 88.57h0c.53 2.05 3.53 3.63 7.16 3.63s7-1.7 7.22-4z" fill="#efefed" strokeMiterlimit="10" strokeWidth="2" stroke="#3a3a3a"/></g></g></g>
                  </svg>
                  <span className="inline"><strong>Facts</strong>for<strong>Friends</strong></span>
                </a>
              </Link>
            </div>
            <div className="text-sm">
              <span>Fact Aid</span>
              <span className="ml-4">Mitmachen</span>
            </div>
          </div>
          <div className={"flex items-center pb-3 text-sm " + (showCategories ? '' : 'hidden')}>
            {sortBy(categories, ['name']).map(category => (
              <a href="#" className="ml-4 hover:text-black">{ category.name }</a>
            ))}
          </div>
        </div>
    )
}

export default Navbar