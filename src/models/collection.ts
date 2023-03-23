import thumbBuf from '@/assets/mock_images/buf/thumb.jpg'
import thumbLanc from '@/assets/mock_images/lanc/thumb.jpg'
import thumbSunf from '@/assets/mock_images/sunf/thumb.jpg'

function getUrlsFromGlob(obj: Object): string[] {
  const retVal: string[] = []
  Object.entries(obj).map(([url, value]) => {
    retVal.push(url)
  })
  return retVal
}

const lancImages = getUrlsFromGlob(
  import.meta.glob('@/assets/mock_images/lanc/*.jpg', {
    eager: true
  })
)
const bufImages = getUrlsFromGlob(
  import.meta.glob('@/assets/mock_images/buf/*.jpg', {
    eager: true
  })
)
const sunfImages = getUrlsFromGlob(
  import.meta.glob('@/assets/mock_images/sunf/*.jpg', {
    eager: true
  })
)

export class Collection {
  name: string
  desc: string
  thumbnailPath: string
  hiddenKeywords: string[]
  imagePaths: string[]
  constructor(
    name: string,
    desc: string,
    thumbnailPath: string,
    imagePaths: string[],
    hiddenKeywords: string[] = []
  ) {
    this.name = name
    this.desc = desc
    this.thumbnailPath = thumbnailPath
    this.imagePaths = imagePaths
    this.hiddenKeywords = hiddenKeywords
  }
}

export function getCollections(keywords?: [string]) {
  const collections = [
    new Collection('Lancaster', 'Historical sites throughout Lancaster.', thumbLanc, lancImages, [
      'featured'
    ]),
    new Collection('Buffalo', 'Historical sites throughout Buffalo.', thumbBuf, bufImages),
    new Collection(
      'Sunflowers of Sanborn',
      'Sunflowers from the famous Sunflowers of Sanborn.',
      thumbSunf,
      sunfImages,
      ['featured']
    )
  ]
  console.log(typeof keywords)
  if (keywords === undefined) {
    return collections
  }
  const retVal: Collection[] = []
  collections.forEach((collection) => {
    let searchString = collection.name + ' ' + collection.desc
    collection.hiddenKeywords.forEach((keyword) => {
      searchString = searchString + ' ' + keyword
    })
    //search each word in the searchString to match with the keywords
    keywords?.forEach((keyword) => {
      const resultIndex = searchString.search(keyword)
      // -1 means no match is found.
      if (resultIndex == -1) return
      retVal.push(collection)
    })
  })
  return retVal
}
