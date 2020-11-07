import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_MEM_MUTATION = gql`
  mutation DeleteMemMutation($id: Int!) {
    deleteMem(id: $id) {
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

const MemsList = ({ mems }) => {
  const { addMessage } = useFlash()
  const [deleteMem] = useMutation(DELETE_MEM_MUTATION, {
    onCompleted: () => {
      addMessage('Mem deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete mem ' + id + '?')) {
      deleteMem({ variables: { id }, refetchQueries: ['MEMS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Name</th>
            <th>Street address</th>
            <th>Suburb</th>
            <th>State</th>
            <th>Postcode</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {mems.map((mem) => (
            <tr key={mem.id}>
              <td>{truncate(mem.id)}</td>
              <td>{truncate(mem.email)}</td>
              <td>{truncate(mem.phone)}</td>
              <td>{truncate(mem.name)}</td>
              <td>{truncate(mem.street_address)}</td>
              <td>{truncate(mem.suburb)}</td>
              <td>{truncate(mem.state)}</td>
              <td>{truncate(mem.postcode)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.mem({ id: mem.id })}
                    title={'Show mem ' + mem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMem({ id: mem.id })}
                    title={'Edit mem ' + mem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete mem ' + mem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(mem.id)}
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

export default MemsList
