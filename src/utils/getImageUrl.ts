export const getImageUrl = (url: string): string =>
  process.env.NEXT_PUBLIC_IMAGE_HOST + url
