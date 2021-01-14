import Cand from 'src/components/Cand'

export const QUERY = gql`
  query FIND_CAND_BY_ID($id: Int!) {
    cand: Cand(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Cand not found</div>


// export const Success = ({ cand }) => {
//   return <Cand cand={cand} />
// }

 export const Success = ({cands}) => {
  return cands.map((cand)=>(
    <article key={cand.id}>
      <header>
        <h2>{cand.firstName} {cand.lastName}</h2>
      </header>
      <p>{cand.vision}
      </p>
   </article>
  ))
  }
