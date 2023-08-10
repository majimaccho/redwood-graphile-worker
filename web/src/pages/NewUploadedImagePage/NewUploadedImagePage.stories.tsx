import type { Meta, StoryObj } from '@storybook/react'

import NewUploadedImagePage from './NewUploadedImagePage'

const meta: Meta<typeof NewUploadedImagePage> = {
  component: NewUploadedImagePage,
}

export default meta

type Story = StoryObj<typeof NewUploadedImagePage>

export const Primary: Story = {}
