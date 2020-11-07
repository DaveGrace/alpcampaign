import MemsLayout from 'src/layouts/MemsLayout'
import MemCell from 'src/components/MemCell'

const MemPage = ({ id }) => {
  return (
    <MemsLayout>
      <MemCell id={id} />
    </MemsLayout>
  )
}

export default MemPage
