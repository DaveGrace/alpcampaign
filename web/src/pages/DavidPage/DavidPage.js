import { Link, routes } from '@redwoodjs/router'
import CanddescLayout from 'src/layouts/CanddescLayout/CanddescLayout'
import DaveLayout from 'src/layouts/DaveLayout/DaveLayout'
import NavBarLayout from 'src/layouts/NavBarLayout/NavBarLayout.js'
const DavidPage = () => {
  return (
    <>
<nav>
        <NavBarLayout></NavBarLayout>
      </nav>

    <div >
      <CanddescLayout></CanddescLayout></div>
<div> <DaveLayout></DaveLayout></div>

    </>
  )
}

export default DavidPage
