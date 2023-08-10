export const schema = gql`
  type UploadedImage {
    id: String!
    path: String!
    createdAt: DateTime!
  }

  type Query {
    uploadedImages: [UploadedImage!]! @requireAuth
    uploadedImage(id: String!): UploadedImage @requireAuth
  }

  input CreateUploadedImageInput {
    path: String!
  }

  input UpdateUploadedImageInput {
    path: String
  }

  type Mutation {
    createUploadedImage(input: CreateUploadedImageInput!): UploadedImage!
      @requireAuth
    updateUploadedImage(
      id: String!
      input: UpdateUploadedImageInput!
    ): UploadedImage! @requireAuth
    deleteUploadedImage(id: String!): UploadedImage! @requireAuth
  }
`
