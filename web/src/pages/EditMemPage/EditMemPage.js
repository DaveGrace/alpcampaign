import MemsLayout from 'src/layouts/MemsLayout'
import EditMemCell from 'src/components/EditMemCell'

const EditMemPage = ({ id }) => {
  return (
    <MemsLayout>
      <EditMemCell id={id} />
    </MemsLayout>
  )
}

export default EditMemPage
