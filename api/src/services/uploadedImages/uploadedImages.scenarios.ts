import type { Prisma, UploadedImage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UploadedImageCreateArgs>({
  uploadedImage: {
    one: { data: { path: 'String2871858' } },
    two: { data: { path: 'String755886' } },
  },
})

export type StandardScenario = ScenarioData<UploadedImage, 'uploadedImage'>
