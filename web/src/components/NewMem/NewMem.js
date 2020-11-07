import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MemForm from 'src/components/MemForm'

const CREATE_MEM_MUTATION = gql`
  mutation CreateMemMutation($input: CreateMemInput!) {
    createMem(input: $input) {
      id
    }
  }
`

const NewMem = () => {
  const { addMessage } = useFlash()
  const [createMem, { loading, error }] = useMutation(CREATE_MEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.mems())
      addMessage('Mem created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createMem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Mem</h2>
      </header>
      <div className="rw-segment-main">
        <MemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMem
