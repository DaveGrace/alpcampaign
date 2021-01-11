import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CandForm from 'src/components/CandForm'

export const QUERY = gql`
  query FIND_CAND_BY_ID($id: Int!) {
    cand: cand(id: $id) {
      id
      firstName
      lastName
      region
      introduce
      vision
      email
      phone
      twitter
    }
  }
`
const UPDATE_CAND_MUTATION = gql`
  mutation UpdateCandMutation($id: Int!, $input: UpdateCandInput!) {
    updateCand(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ cand }) => {
  const { addMessage } = useFlash()
  const [updateCand, { loading, error }] = useMutation(UPDATE_CAND_MUTATION, {
    onCompleted: () => {
      navigate(routes.cands())
      addMessage('Cand updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateCand({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Cand {cand.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CandForm cand={cand} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
