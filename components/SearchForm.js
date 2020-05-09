const SearchForm = () => {
    return(
    <div className="flex justify-center">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-gray-500 bg-white py-2 mb-4 mt-2 rounded-t-lg">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Wonach suchst du?"></input>
          <button className="flex-shrink-0 p-2 border border-gray-500 hover:border-gray-700 rounded mr-2" type="button">
            <svg className="h-6 w-6 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 1C5.092 1 2 2.512 2 4.001v2c0 .918 6 6 6 6v6c-.001.684 1 1 2 1s2.001-.316 2-1v-6s6-5.082 6-6v-2C18 2.512 14.908 1 10 1zm0 5.123C6.409 6.122 3.862 4.79 3.862 4.292 3.86 3.797 6.41 2.461 10 2.463c3.59-.002 6.14 1.334 6.138 1.828 0 .499-2.547 1.831-6.138 1.832z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
    )
}

export default SearchForm;