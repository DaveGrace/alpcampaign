import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_CAND_MUTATION = gql`
  mutation DeleteCandMutation($id: Int!) {
    deleteCand(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CandsList = ({ cands }) => {
  const { addMessage } = useFlash()
  const [deleteCand] = useMutation(DELETE_CAND_MUTATION, {
    onCompleted: () => {
      addMessage('Cand deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete cand ' + id + '?')) {
      deleteCand({ variables: { id }, refetchQueries: ['CANDS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Region</th>
            <th>Introduce</th>
            <th>Vision</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Twitter</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cands.map((cand) => (
            <tr key={cand.id}>
              <td>{truncate(cand.id)}</td>
              <td>{truncate(cand.firstName)}</td>
              <td>{truncate(cand.lastName)}</td>
              <td>{truncate(cand.region)}</td>
              <td>{truncate(cand.introduce)}</td>
              <td>{truncate(cand.vision)}</td>
              <td>{truncate(cand.email)}</td>
              <td>{truncate(cand.phone)}</td>
              <td>{truncate(cand.twitter)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.cand({ id: cand.id })}
                    title={'Show cand ' + cand.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCand({ id: cand.id })}
                    title={'Edit cand ' + cand.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete cand ' + cand.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cand.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CandsList
