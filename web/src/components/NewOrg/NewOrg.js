import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrgForm from 'src/components/OrgForm'

const CREATE_ORG_MUTATION = gql`
  mutation CreateOrgMutation($input: CreateOrgInput!) {
    createOrg(input: $input) {
      id
    }
  }
`

const NewOrg = () => {
  const { addMessage } = useFlash()
  const [createOrg, { loading, error }] = useMutation(CREATE_ORG_MUTATION, {
    onCompleted: () => {
      navigate(routes.orgs())
      addMessage('Org created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createOrg({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Org</h2>
      </header>
      <div className="rw-segment-main">
        <OrgForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOrg
