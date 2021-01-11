import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CAND_MUTATION = gql`
  mutation DeleteCandMutation($id: Int!) {
    deleteCand(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Cand = ({ cand }) => {
  const { addMessage } = useFlash()
  const [deleteCand] = useMutation(DELETE_CAND_MUTATION, {
    onCompleted: () => {
      navigate(routes.cands())
      addMessage('Cand deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete cand ' + id + '?')) {
      deleteCand({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Cand {cand.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cand.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{cand.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{cand.lastName}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{cand.region}</td>
            </tr>
            <tr>
              <th>Introduce</th>
              <td>{cand.introduce}</td>
            </tr>
            <tr>
              <th>Vision</th>
              <td>{cand.vision}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{cand.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{cand.phone}</td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td>{cand.twitter}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCand({ id: cand.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cand.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Cand
