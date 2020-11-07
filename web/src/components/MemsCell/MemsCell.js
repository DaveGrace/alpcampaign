import { Link, routes } from '@redwoodjs/router'

import Mems from 'src/components/Mems'

export const QUERY = gql`
  query MEMS {
    mems {
      id
      email
      phone
      name
      street_address
      suburb
      state
      postcode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No mems yet. '}
      <Link to={routes.newMem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ mems }) => {
  return <Mems mems={mems} />
}
