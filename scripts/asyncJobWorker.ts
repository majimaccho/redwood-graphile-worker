// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'
import { run } from 'graphile-worker'
import { createThumbnail } from 'api/src/tasks/createThumbnail'

export default async ({ args }) => {
  // Your script here...
  console.log(':: Executing script with args ::')
  console.log(args)

  const runner = await run({
    connectionString: process.env.DATABASE_URL,
    concurrency: 3,
    noHandleSignals: false,
    taskList: {
      createThumbnail
    }
  })

  await runner.promise
}
