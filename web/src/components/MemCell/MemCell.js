import Mem from 'src/components/Mem'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Mem not found</div>

export const Success = ({ mem }) => {
  return <Mem mem={mem} />
}
