import { Link, routes } from '@redwoodjs/router'
import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogTileCell from 'src/components/BlogTileCell'
import DaveLayout from 'src/layouts/DaveLayout'
import NavBarLayout from 'src/layouts/NavBarLayout'
import CandidateLayout from 'src/layouts/CandidateLayout'
const HomePage = () => {
  return (
    <>
      <nav>
        <NavBarLayout></NavBarLayout>
      </nav>

      <main>
        <CandidateLayout></CandidateLayout>
      </main>
<div>
      <DaveLayout>

      </DaveLayout>

</div>
    </>
  )
}

export default HomePage
