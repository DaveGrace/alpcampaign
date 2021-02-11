import { Link, routes } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout';
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({id}) => {
  return (

     <PostsLayout>
      <BlogPostCell id={id} />
     </PostsLayout>
     )
}

export default BlogPostPage
