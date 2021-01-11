import { Link, routes } from '@redwoodjs/router'

import Cands from 'src/components/Cands'

export const QUERY = gql`
  query CANDS {
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

export const Success = ({ cands }) => {
  return <Cands cands={cands} />
}
