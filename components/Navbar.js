import React, { useState } from "react";
import Link from "next/link";
import sortBy from 'lodash/sortBy'

const Navbar = ( ) => {
    // Handle toggle category button
    const [showCategories, setShowCateogies] = useState(false);
    const toggleCategories = () => setShowCateogies(!showCategories);

    // Get categories with available Snacks (will be replace by API call)
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
                    <path d="M13.981 2H6.018s-.996 0-.996 1h9.955c0-1-.996-1-.996-1zm2.987 3c0-1-.995-1-.995-1H4.027s-.995 0-.995 1v1h13.936V5zm1.99 1l-.588-.592V7H1.63V5.408L1.041 6C.452 6.592.03 6.75.267 8c.236 1.246 1.379 8.076 1.549 9 .186 1.014 1.217 1 1.217 1h13.936s1.03.014 1.217-1c.17-.924 1.312-7.754 1.549-9 .235-1.25-.187-1.408-.777-2zM14 11.997c0 .554-.449 1.003-1.003 1.003H7.003A1.003 1.003 0 016 11.997V10h1v2h6v-2h1v1.997z"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <Link as={`/`} href={`/`}>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.14 95.2" className="h-8 w-8 fill-current text-gray-800 inline">
                  <defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_1-2-2" data-name="Layer 1-2"><ellipse cx="33.1" cy="91.76" rx="4.15" ry="2.44" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a" fill="#c1c1c1"/><path d="M34 1h-1.84C5.88 2.09-8.65 31.39 8.27 51.39c16.5 15.35 9.56 8.53 15.58 28.36h18.39c6-19.81-.9-13.09 15.6-28.36C74.82 31.44 60.26 2.14 34 1z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a"/><path d="M30.88 78.6Q29.41 60.06 28 41.49c-1.47-18.56-11.73-7.71-.29-12.08s4.07 12.08 4.07 12.08H34"/><path d="M35.83 79q1.08-18.76 2.11-37.54c1.05-18.77 11.73-7.71.3-12.08s-4.15 12.08-4.15 12.08h-2.36"/><circle cx="26.53" cy="24.02" r="3.45"/><circle cx="39.89" cy="24.02" r="3.45"/><path d="M42.48 79H23.71L26 88.57h0c.53 2.05 3.53 3.63 7.16 3.63s7-1.7 7.22-4z" fill="#efefed" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a"/></g></g></g>
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