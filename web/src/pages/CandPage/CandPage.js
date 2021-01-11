import CandsLayout from 'src/layouts/CandsLayout'
import CandCell from 'src/components/CandCell'

const CandPage = ({ id }) => {
  return (
    <CandsLayout>
      <CandCell id={id} />
    </CandsLayout>
  )
}

export default CandPage
