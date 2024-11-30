import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {

  const activeClass = "block text-base py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass = "block text-base py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
 
 const [hidden, setHidden] = useState(true);
 const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkmode")) || false);

 useEffect(() => {
 localStorage.setItem("darkMode", JSON.stringify(darkMode));
  if (darkMode) {
    document.documentElement.classList.add('dark');
  }
  else {
    document.documentElement.classList.remove('dark');
  }
 },[darkMode])

 const navigate = useNavigate();

 const handleSubmit = (event) => {
  event.preventDefault();
  const queryTerm = event.target.search.value;
  event.target.reset;
  return navigate(`/search?q=${queryTerm}`)
 }
  return (
    <header> 
  <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <Link path="/" href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OMAZ-movies</span>
    </Link>
    <div id="mobile-nav" className="flex md:order-2">
    <button 
  onClick={() => setDarkMode(!darkMode)}
  type="button" 
  className="text-gray-900 rounded mr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700"
    >
  {
    darkMode ? (
      // Sun Icon
      <svg 
        className="w-5 h-5" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M10 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM10 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM3.22 4.22a1 1 0 1 1 1.42-1.42 1 1 0 0 1-1.42 1.42ZM15.36 16.36a1 1 0 1 1 1.42 1.42 1 1 0 0 1-1.42-1.42ZM3 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM3.22 15.78a1 1 0 1 1 1.42 1.42 1 1 0 0 1-1.42-1.42ZM16.36 3.64a1 1 0 1 1 1.42-1.42 1 1 0 0 1-1.42 1.42ZM10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
      </svg>
    ) : (
      // Moon Icon
      <svg 
        className="w-5 h-5" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1.5"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293a8 8 0 1 1-10.586-10.586 8 8 0 1 0 10.586 10.586Z" />
      </svg>
    )
  }
</button>

      <button type="button" 
      onClick={() => setHidden(!hidden)}
      data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
          <form onSubmit={handleSubmit}>
          <input type="text" id="search-navbar" 
          name="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search..." autoComplete="false" />
          </form>
      </div>
      <button 
      onClick={() => setHidden(!hidden)}
      data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>

      <div className={`items-center justify-between ${hidden ? "hidden": ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <form onSubmit={handleSubmit}>
          <input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="false"/>

          </form>
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? activeClass: inActiveClass} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/popular" className={({isActive}) => isActive ? activeClass: inActiveClass}>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top" className={({isActive}) => isActive ? activeClass: inActiveClass}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming" className={({isActive}) => isActive ? activeClass: inActiveClass}>Upcoming</NavLink>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
    </header>
  )
}

export default Header;