import { Link, routes } from '@redwoodjs/router'
import header from './Eurobodalla 2021 logo.png'
import logo from './CountryLaborLogo2014.jpg'
import { data } from 'autoprefixer'
import {useState} from 'react'
import {Transition} from '@headlessui/react'
{/*const header = ({ header }) => {
return JSON.stringify(header)}*/}



const NavBarLayout = ({ children }) => {
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
<button type="button"
        onClick={()=>setIsOpen(!isOpen)}
        className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true">
      Contact Us
      {/*<!-- Heroicon name: chevron-down -->*/}
  <svg className="-mr-1 ml-2 h-5 w-5"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 20 20"
       fill="currentColor"
       aria-hidden="true">
  <path fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd" />
  </svg>
</button>

 <Transition
     show={isOpen}
     enter="transition ease-out duration-100 transform"
     enterFrom="transform opacity-0 scale-95"
     enterTo="transform opacity-100 scale-100"
     leave="transition ease-in duration-75"
     leaveFrom="transform opacity-100 scale-100"
     leaveTo="transform opacity-0 scale-95"
     >
     {(ref) => (
          <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">

<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <a href="https://forms.gle/q7EBmh1cFHcQxiMRA"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
       role="menuitem">Volunteer with us</a>
    <a href="https://forms.gle/VnXAVau3pYEGoPxH9"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
       role="menuitem">Send us a message</a>
    {/* <a href="#"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
       role="menuitem">License</a>
    <form method="POST" action="#">
      <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        Sign out
      </button>
    </form>*/}
  </div>
            </div>
          </div>
        )}

     </Transition>
</>
  )
}
  return (
    <>
      <header>
        <nav className="bg-gray-300 shadow ">
          <div className="mx-auto px-l sm:px-6 lg:px-0">
            <div className="relative flex  justify-left h-16 ">
              <img className="object-scale-down object-contain  px-0 h-full" src= {header} alt ="header">
              </img>

              <div className="absolute inset-y-0 left-0 flex items-start sm:hidden">
                {/*<!-- Mobile menu button -->*/}
                <button
                  className="inline-flex items-center justify-between p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  {/*<!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->*/}
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*} <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->*/}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow logo"
                  ></img>

                </div>


              <div className="hidden sm:ml-6 sm:flex">
                  <a
                    href="#"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                  >
                    <Link to={routes.home()}>Home</Link>
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-blue-500 hover:text-gray-700 hover:border-blue-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <Link to={routes.candidate()}>Candidates</Link>
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-blue-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <Link to ={routes.mems()}>Members</Link>
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Calendar
                  </a>
                  <div>
                  {/* dropdown builds the ... */}
                    {Dropdown()}
                    </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               {/* <button
                  className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                  aria-label="Notifications"
                >
                  {/*<!-- Heroicon name: bell -->
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button> */}

                {/* <!--  Profile dropdown --> */}

                  </div>


                </div>
              </div>


          {/* <!--
    Mobile menu, toggle classNames based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->*/}
          <div className="hidden sm:hidden">
            <div className="pt-2 pb-4">
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Team
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Calendar
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/*<main>{children}</main>*/}
    </>
  )
}

export default NavBarLayout
