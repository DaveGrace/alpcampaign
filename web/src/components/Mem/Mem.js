import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MEM_MUTATION = gql`
  mutation DeleteMemMutation($id: Int!) {
    deleteMem(id: $id) {
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

const Mem = ({ mem }) => {
  const { addMessage } = useFlash()
  const [deleteMem] = useMutation(DELETE_MEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.mems())
      addMessage('Mem deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete mem ' + id + '?')) {
      deleteMem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Mem {mem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{mem.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{mem.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{mem.phone}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{mem.name}</td>
            </tr>
            <tr>
              <th>Street address</th>
              <td>{mem.street_address}</td>
            </tr>
            <tr>
              <th>Suburb</th>
              <td>{mem.suburb}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{mem.state}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{mem.postcode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMem({ id: mem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(mem.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Mem
