import { Link, routes } from '@redwoodjs/router'

import Orgs from 'src/components/Orgs'

export const QUERY = gql`
  query ORGS {
    orgs {
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
      {'No orgs yet. '}
      <Link to={routes.newOrg()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ orgs }) => {
  return <Orgs orgs={orgs} />
}
