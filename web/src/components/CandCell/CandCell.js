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


export const Success = ({ cand }) => {
  return <Cand cand={cand} />
}

// export const Success = ({ cand }) => {
//   return cand.map((Cand)=>(
//     <article key={Cand.id}>
//       <header>
//         <h2>{Cand.firstName} {Cand.lastName}</h2>
//       </header>
//       <p>{Cand.vision}
//       </p>


//     </article>
//   ))

