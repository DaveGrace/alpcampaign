import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CandForm from 'src/components/CandForm'

const CREATE_CAND_MUTATION = gql`
  mutation CreateCandMutation($input: CreateCandInput!) {
    createCand(input: $input) {
      id
    }
  }
`

const NewCand = () => {
  const { addMessage } = useFlash()
  const [createCand, { loading, error }] = useMutation(CREATE_CAND_MUTATION, {
    onCompleted: () => {
      navigate(routes.cands())
      addMessage('Cand created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createCand({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Cand</h2>
      </header>
      <div className="rw-segment-main">
        <CandForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCand
