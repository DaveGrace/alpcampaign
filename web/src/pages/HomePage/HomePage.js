import { Link, routes } from '@redwoodjs/router'
import BlogPostsCell from 'src/components/BlogPostsCell'
import PostsLayout from 'src/layouts/PostsLayout'
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

      <PostsLayout>
        <BlogPostsCell />
      </PostsLayout>
    </>
  )
}

export default HomePage
