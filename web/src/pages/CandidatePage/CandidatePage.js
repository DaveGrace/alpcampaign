import { Link, routes } from '@redwoodjs/router'
import CandidateLayout from 'src/layouts/CandidateLayout'
import CandsCell from 'src/components/CandsCell'
import NavBarLayout from 'src/layouts/NavBarLayout/NavBarLayout'

const CandidatePage = () => {
  return (
    <>
      <header>
       <NavBarLayout></NavBarLayout>
      <CandidateLayout>
<CandsCell> </CandsCell>
     </CandidateLayout>
</header>

    </>
  )
}

export default CandidatePage
