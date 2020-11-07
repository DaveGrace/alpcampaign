import OrgsLayout from 'src/layouts/OrgsLayout'
import OrgCell from 'src/components/OrgCell'

const OrgPage = ({ id }) => {
  return (
    <OrgsLayout>
      <OrgCell id={id} />
    </OrgsLayout>
  )
}

export default OrgPage
