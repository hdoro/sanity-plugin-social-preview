# Sanity social and SEO document preview

Show your editors how their page will look on Google and major social platforms in your documents' view

## Installation & usage

Start by running:

`sanity install social-preview`

Now go into your `deskStructure` file and add the following:

```js
// deskStructure.js

import SocialPreview from 'part:social-preview/component'

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return different views based on the schema type
  if (['blog.post', 'marketing.page'].includes(schemaType) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview({ facebook: false })).title('Social & SEO'),
    ])
  }
  return S.document().views([S.view.form()])
}
```

This is going to get you a barebones starter, which you can customize by following the guide below.

## Customizing

GUIDE PENDING

```ts
interface Props {
  // Function you'll use to customize which props correspond to which
  prepareFunction: (doc: GenericSanityDoc) => PreparedPreview | undefined
  google?: boolean
  twitter?: boolean
  linkedin?: boolean
  facebook?: boolean
}

// The function must return this object:
interface PreparedPreview {
  title: string
  description?: string
  ogImage?: {
    // Regular SanityImage data structure
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  siteUrl: string
  slug?: string
}
```

## Possible future improvements

- Mimic the Sanity-native preview object behavior for selecting the required props
  - Currently only `prepare` is provided, meaning you have rewrite everything if you need to change a single field's name. Providing `select` would fix this :)
- Update layouts - LinkedIn and Facebook are wildly different now
