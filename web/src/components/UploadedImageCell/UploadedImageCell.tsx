import type {
  FindUploadedImageQuery,
  FindUploadedImageQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUploadedImageQuery($id: String!) {
    uploadedImage: uploadedImage(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUploadedImageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  uploadedImage,
}: CellSuccessProps<
  FindUploadedImageQuery,
  FindUploadedImageQueryVariables
>) => {
  return <div>{JSON.stringify(uploadedImage)}</div>
}
