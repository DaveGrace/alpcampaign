import { Link, routes } from '@redwoodjs/router'

const ParamtestPage = () => {
  return (
    <>
      <h1>ParamtestPage</h1>
      <p>
        Find me in <tt>./web/src/pages/ParamtestPage/ParamtestPage.js</tt>
      </p>
      <p>
        My default route is named <tt>paramtest</tt>, link to me with `
        <Link to={routes.paramtest()}>Paramtest</Link>`
      </p>
    </>
  )
}

export default ParamtestPage
