import { quickAddJob } from "graphile-worker"
import { CreateThumbnailPayload } from "src/tasks/createThumbnail"

export type CreateThumbnailJobArgs = {
  name: 'createThumbnail'
  payload: CreateThumbnailPayload
}

export type JobArgs = CreateThumbnailJobArgs

export const createJob = ({name, payload}: JobArgs) => {
  return quickAddJob(
    { connectionString: process.env.DATABASE_URL },
    name,
    payload
  )
}
