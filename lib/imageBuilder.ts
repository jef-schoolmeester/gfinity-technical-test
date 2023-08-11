import imageUrlBuilder from '@sanity/image-url'

import { client } from './config'

const builder = imageUrlBuilder(client)

export const urlFor = (source: string) => {
  return builder.image(source)
}

