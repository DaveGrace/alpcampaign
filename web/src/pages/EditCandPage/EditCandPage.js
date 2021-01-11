import CandsLayout from 'src/layouts/CandsLayout'
import EditCandCell from 'src/components/EditCandCell'

const EditCandPage = ({ id }) => {
  return (
    <CandsLayout>
      <EditCandCell id={id} />
    </CandsLayout>
  )
}

export default EditCandPage
