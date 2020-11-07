import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrgForm from 'src/components/OrgForm'

export const QUERY = gql`
  query FIND_ORG_BY_ID($id: Int!) {
    org: org(id: $id) {
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
const UPDATE_ORG_MUTATION = gql`
  mutation UpdateOrgMutation($id: Int!, $input: UpdateOrgInput!) {
    updateOrg(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ org }) => {
  const { addMessage } = useFlash()
  const [updateOrg, { loading, error }] = useMutation(UPDATE_ORG_MUTATION, {
    onCompleted: () => {
      navigate(routes.orgs())
      addMessage('Org updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateOrg({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Org {org.id}</h2>
      </header>
      <div className="rw-segment-main">
        <OrgForm org={org} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
