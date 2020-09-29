import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <tt>./web/src/pages/HomePage/HomePage.js</tt>
      </p>
      <p>
        My default route is named <tt>home</tt>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          Button text
        </button>
      </span>
    </>
  )
}

export default HomePage
