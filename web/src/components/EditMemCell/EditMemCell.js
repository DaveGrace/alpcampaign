import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MemForm from 'src/components/MemForm'

export const QUERY = gql`
  query FIND_MEM_BY_ID($id: Int!) {
    mem: mem(id: $id) {
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
const UPDATE_MEM_MUTATION = gql`
  mutation UpdateMemMutation($id: Int!, $input: UpdateMemInput!) {
    updateMem(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ mem }) => {
  const { addMessage } = useFlash()
  const [updateMem, { loading, error }] = useMutation(UPDATE_MEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.mems())
      addMessage('Mem updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateMem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Mem {mem.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MemForm mem={mem} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
