import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ posts }) => {
  return posts.map((post) => (
<article key ={post.id}>
    <header>
      <h2>
        <Link to={routes.post()}>{post.title}</Link>
      </h2>
    </header>
    <p>{post.body}</p>
    <div>Posted at: {post.createdAt}</div>
</article>

  ))
}
