import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ORG_MUTATION = gql`
  mutation DeleteOrgMutation($id: Int!) {
    deleteOrg(id: $id) {
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

const Org = ({ org }) => {
  const { addMessage } = useFlash()
  const [deleteOrg] = useMutation(DELETE_ORG_MUTATION, {
    onCompleted: () => {
      navigate(routes.orgs())
      addMessage('Org deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete org ' + id + '?')) {
      deleteOrg({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Org {org.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{org.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{org.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{org.phone}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{org.name}</td>
            </tr>
            <tr>
              <th>Street address</th>
              <td>{org.street_address}</td>
            </tr>
            <tr>
              <th>Suburb</th>
              <td>{org.suburb}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{org.state}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{org.postcode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrg({ id: org.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(org.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Org
