import Footer from "./Footer"

export default ({ children }) => {
    return (
      <>
        <div className="antialiased bg-gray-100 min-h-screen pb-2">
          { children }
        </div>
        <Footer />
      </>
    )
  }