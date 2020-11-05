//import { Link, routes } from '@redwoodjs/router'//
import NavBarLayout from 'src/layouts/NavBarLayout'
import CandidateLayout from 'src/layouts/CandidateLayout'
const HomePage = () => {
  return (
    <>
      <nav className="px-0">
        <NavBarLayout></NavBarLayout>
      </nav>
      <main>
        <CandidateLayout></CandidateLayout>
      </main>
    </>
  )
}

export default HomePage
