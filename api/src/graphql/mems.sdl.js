export const schema = gql`
  type Mem {
    id: Int!
    email: String!
    phone: Int
    name: String!
    street_address: String!
    suburb: String!
    state: String!
    postcode: Int!
  }

  type Query {
    mems: [Mem!]!
    mem(id: Int!): Mem
  }

  input CreateMemInput {
    email: String!
    phone: Int
    name: String!
    street_address: String!
    suburb: String!
    state: String!
    postcode: Int!
  }

  input UpdateMemInput {
    email: String
    phone: Int
    name: String
    street_address: String
    suburb: String
    state: String
    postcode: Int
  }

  type Mutation {
    createMem(input: CreateMemInput!): Mem!
    updateMem(id: Int!, input: UpdateMemInput!): Mem!
    deleteMem(id: Int!): Mem!
  }
`
