import type { UploadedImage } from '@prisma/client'

import {
  uploadedImages,
  uploadedImage,
  createUploadedImage,
  updateUploadedImage,
  deleteUploadedImage,
} from './uploadedImages'
import type { StandardScenario } from './uploadedImages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('uploadedImages', () => {
  scenario('returns all uploadedImages', async (scenario: StandardScenario) => {
    const result = await uploadedImages()

    expect(result.length).toEqual(Object.keys(scenario.uploadedImage).length)
  })

  scenario(
    'returns a single uploadedImage',
    async (scenario: StandardScenario) => {
      const result = await uploadedImage({ id: scenario.uploadedImage.one.id })

      expect(result).toEqual(scenario.uploadedImage.one)
    }
  )

  scenario('creates a uploadedImage', async () => {
    const result = await createUploadedImage({
      input: { path: 'String4993345' },
    })

    expect(result.path).toEqual('String4993345')
  })

  scenario('updates a uploadedImage', async (scenario: StandardScenario) => {
    const original = (await uploadedImage({
      id: scenario.uploadedImage.one.id,
    })) as UploadedImage
    const result = await updateUploadedImage({
      id: original.id,
      input: { path: 'String87062822' },
    })

    expect(result.path).toEqual('String87062822')
  })

  scenario('deletes a uploadedImage', async (scenario: StandardScenario) => {
    const original = (await deleteUploadedImage({
      id: scenario.uploadedImage.one.id,
    })) as UploadedImage
    const result = await uploadedImage({ id: original.id })

    expect(result).toEqual(null)
  })
})
