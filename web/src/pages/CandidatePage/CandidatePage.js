import { Link, routes } from '@redwoodjs/router'

const CandidatePage = () => {
  return (
    <>
      <header>
        <h1>CandidatePage</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.candidate()}>Candidate</Link>`
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Link to={routes.home()}>Return Home</Link>
      </main>
    </>
  )
}

export default CandidatePage
