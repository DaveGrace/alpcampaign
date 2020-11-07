export const schema = gql`
  type Org {
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
    orgs: [Org!]!
    org(id: Int!): Org
  }

  input CreateOrgInput {
    email: String!
    phone: Int
    name: String!
    street_address: String!
    suburb: String!
    state: String!
    postcode: Int!
  }

  input UpdateOrgInput {
    email: String
    phone: Int
    name: String
    street_address: String
    suburb: String
    state: String
    postcode: Int
  }

  type Mutation {
    createOrg(input: CreateOrgInput!): Org!
    updateOrg(id: Int!, input: UpdateOrgInput!): Org!
    deleteOrg(id: Int!): Org!
  }
`
