import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query  {
    cands {
      id
      firstName
      lastName
      region
      introduce
      vision
      email
      phone
      twitter
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cands yet. '}
      <Link to={routes.newCand()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

// export const Success = ({ cands }) => {
//   return <Cands cands={cands} />
// }

export const Success = ({cands}) => {
    return cands.map((cand)=>(
      <article key={cand.id}>
        <header>
          <h2>{cand.firstName} {cand.lastName}</h2>
        </header>
        <p>{cand.vision}
        </p>
     </article>
    ))
    }

