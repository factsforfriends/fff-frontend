import Footer from "./Footer"

export default ({ children }) => {
    return (
      <div className="antialiased bg-gray-100 min-h-screen">
          <div className="flex justify-around items-center border p-3 text-black font-sans">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.14 95.2" className="h-8 w-8 fill-current text-gray-800">
                <defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_1-2-2" data-name="Layer 1-2"><ellipse cx="33.1" cy="91.76" rx="4.15" ry="2.44" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a" fill="#c1c1c1"/><path d="M34 1h-1.84C5.88 2.09-8.65 31.39 8.27 51.39c16.5 15.35 9.56 8.53 15.58 28.36h18.39c6-19.81-.9-13.09 15.6-28.36C74.82 31.44 60.26 2.14 34 1z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a"/><path d="M30.88 78.6Q29.41 60.06 28 41.49c-1.47-18.56-11.73-7.71-.29-12.08s4.07 12.08 4.07 12.08H34"/><path d="M35.83 79q1.08-18.76 2.11-37.54c1.05-18.77 11.73-7.71.3-12.08s-4.15 12.08-4.15 12.08h-2.36"/><circle cx="26.53" cy="24.02" r="3.45"/><circle cx="39.89" cy="24.02" r="3.45"/><path d="M42.48 79H23.71L26 88.57h0c.53 2.05 3.53 3.63 7.16 3.63s7-1.7 7.22-4z" fill="#efefed" stroke-miterlimit="10" stroke-width="2" stroke="#3a3a3a"/></g></g></g>
              </svg>
              <span><strong>Facts</strong>for<strong>Friends</strong></span>
            </div>
            <div>
              Fact Aid
            </div>
            <div>
              Mitmachen
            </div>
          </div>
          <div className="justify-around">
            { children }
          </div>
          <Footer />
      </div>
    )
  }