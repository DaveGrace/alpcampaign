import OrgsLayout from 'src/layouts/OrgsLayout'
import EditOrgCell from 'src/components/EditOrgCell'

const EditOrgPage = ({ id }) => {
  return (
    <OrgsLayout>
      <EditOrgCell id={id} />
    </OrgsLayout>
  )
}

export default EditOrgPage
