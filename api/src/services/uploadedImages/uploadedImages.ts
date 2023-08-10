import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { createJob } from 'src/lib/job'

export const uploadedImages: QueryResolvers['uploadedImages'] = () => {
  return db.uploadedImage.findMany()
}

export const uploadedImage: QueryResolvers['uploadedImage'] = ({ id }) => {
  return db.uploadedImage.findUnique({
    where: { id },
  })
}

export const createUploadedImage: MutationResolvers['createUploadedImage'] = ({
  input,
}) => {
  createJob({
    name: 'createThumbnail',
    payload: {
      path: input.path,
    },
  })

  return db.uploadedImage.create({
    data: input,
  })
}

export const updateUploadedImage: MutationResolvers['updateUploadedImage'] = ({
  id,
  input,
}) => {
  return db.uploadedImage.update({
    data: input,
    where: { id },
  })
}

export const deleteUploadedImage: MutationResolvers['deleteUploadedImage'] = ({
  id,
}) => {
  return db.uploadedImage.delete({
    where: { id },
  })
}
