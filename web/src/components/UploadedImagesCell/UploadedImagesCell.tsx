import { useMutation } from '@redwoodjs/web'
import type { UploadedImagesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query UploadedImagesQuery {
    uploadedImages {
      id
    }
  }
`

const UploadImageMutation = gql`
  mutation UploadImage($input: CreateUploadedImageInput!) {
    createUploadedImage(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  uploadedImages,
}: CellSuccessProps<UploadedImagesQuery>) => {
  const [createUploadedImage] = useMutation(UploadImageMutation, {
    refetchQueries: [{ query: QUERY }],
  })

  return (
    <div>
      <button onClick={
        () => createUploadedImage({
          variables: {
            input: {
              path: `${new Date()}.jpg`,
            }
          }
        })
      }>UPLOAD</button>

      <ul>
        {uploadedImages.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    </div>
  )
}
