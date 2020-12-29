export const schema = gql`
  type Vol {
    id: Int!
    Title: String!
    FirstName: String!
    LastName: String!
    MPhone: String!
    Email: String!
    Saddress: String!
    Town: String!
    PCode: String!
    Weekday: Boolean
    Weekend: Boolean
    Morning: Boolean
    Anoon: Boolean
    Evening: Boolean
    Anytime: Boolean
    OwnCar: Boolean
    CanDrive: Boolean
    Skills: String!
    Experience: String
    Comments: String
  }

  type Query {
    vols: [Vol!]!
  }

  input CreateVolInput {
    Title: String!
    FirstName: String!
    LastName: String!
    MPhone: String!
    Email: String!
    Saddress: String!
    Town: String!
    PCode: String!
    Weekday: Boolean
    Weekend: Boolean
    Morning: Boolean
    Anoon: Boolean
    Evening: Boolean
    Anytime: Boolean
    OwnCar: Boolean
    CanDrive: Boolean
    Skills: String!
    Experience: String
    Comments: String
  }

  input UpdateVolInput {
    Title: String
    FirstName: String
    LastName: String
    MPhone: String
    Email: String
    Saddress: String
    Town: String
    PCode: String
    Weekday: Boolean
    Weekend: Boolean
    Morning: Boolean
    Anoon: Boolean
    Evening: Boolean
    Anytime: Boolean
    OwnCar: Boolean
    CanDrive: Boolean
    Skills: String
    Experience: String
    Comments: String
  }

  type Mutation {
    createVol(input: CreateVolInput!): Vol
  }
`
