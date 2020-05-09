import Footer from "./Footer"

export default ({ children }) => {
    return (
      <div className="antialiased bg-gray-100 min-h-screen">
          <div className="flex justify-center border p-3 text-black font-sans">
              <span className="font-bold">Facts</span>for<span className="font-bold">Friends</span>
          </div>
          <div className="justify-around">
            { children }
          </div>
          <Footer />
      </div>
    )
  }