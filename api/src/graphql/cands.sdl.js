export const schema = gql`
  type Cand {
    id: Int!
    firstName: String!
    lastName: String!
    region: String!
    introduce: String!
    vision: String!
    email: String!
    phone: String!
    twitter: String!
  }

  type Query {
    cands: [Cand!]!
    cand(id: Int!): Cand
  }

  input CreateCandInput {
    firstName: String!
    lastName: String!
    region: String!
    introduce: String!
    vision: String!
    email: String!
    phone: String!
    twitter: String!
  }

  input UpdateCandInput {
    firstName: String
    lastName: String
    region: String
    introduce: String
    vision: String
    email: String
    phone: String
    twitter: String
  }

  type Mutation {
    createCand(input: CreateCandInput!): Cand!
    updateCand(id: Int!, input: UpdateCandInput!): Cand!
    deleteCand(id: Int!): Cand!
  }
`
