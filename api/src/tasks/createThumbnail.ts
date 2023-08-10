export type CreateThumbnailPayload = {
  path: string
}
export const createThumbnail = async ({ path }: CreateThumbnailPayload) => {
  return new Promise<void>((resolve) => {
    console.log(':: Executing script ::');

    setTimeout(() => {
      console.log(':: Creating thumbnail ::');
      console.log(`:: Path: ${path}`);

      resolve()
    }, 3000)
  })
}
