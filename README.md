# Sanity social and SEO document preview

Show your editors how their page will look on Google and major social platforms in your documents' view

![Screenshot of this plugin in action](screenshot-1.png)

## Installation & usage

Start by running:

`sanity install social-preview`

Now go into your `deskStructure` file and add the following (if you don't have structure builder settings, [check out the official guide](https://www.sanity.io/guides/getting-started-with-structure-builder)):

```js
// deskStructure.js
import SocialPreview from 'part:social-preview/component'

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Add the social preview view only to those schema types that support it
  if (['blog.post', 'marketing.page'].includes(schemaType) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview()).title('Social & SEO'),
    ])
  }
  return S.document().views([S.view.form()])
}
```

This is going to get you a barebones starter, which you can customize by following the guide below.

## Customizing

This plugin tries to mimic [Sanity's `preview` behavior on list views](https://www.sanity.io/docs/previews-list-views#specify-preview-options-770fd57a8f95), so you only have to customize it if your fields don't match the default choices below:

```ts
{
  title: doc.title || '(page not yet named)',
  description: doc.description || doc.metaDescription || doc.seoDescription,
  siteUrl: 'https://example.com',
  ogImage: doc.openGraphImage || doc.ogImage || doc.image,
  slug: doc.slug?.current || doc.relativePath?.current,
}
```

If, for example, your description comes from `doc.meta.description` and that's a block content, and you want to change your site's URL shown on cards, you can customize the view by doing so:

```js
import SocialPreview from 'part:social-preview/component'
import { toPlainText } from 'part:social-preview/utils'

export const getDefaultDocumentNode = ({ schemaType }) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(
        SocialPreview({
          // Overwrite prepareFunction to pick the right fields
          prepareFunction: (
            { title, meta } /* this object is the currently active document */,
          ) => ({
            title,
            description: toPlainText(meta?.description || []),
            siteUrl: 'https://hdoro.dev',
          }),
        }),
      )
      .title('Social & SEO'),
  ])
}
```

You can also remove any individual previews:

```js
S.view.component(
  SocialPreview({
    google: true,
    facebook: false,
    twitter: true,
    linkedin: false,
  }),
)
```

💡 Eventually I intend to make our lives easier by providing a `select` object that works like Sanity's list preview, making it easier to overwrite fields without the need for a new `prepare` function. In the meantime, feel free to [**copy the fallbackPrepare function** from this repo](https://github.com/hdoro/sanity-plugin-social-preview/blob/master/src/SocialPreview.tsx#L15-L27).

Your custom `prepare` function must return an object with the following:

```ts
interface PreparedPreview {
  title: string
  siteUrl: string
  // ? denotes an optional prop
  description?: string
  ogImage?: {
    // Regular SanityImage data structure
    // other fields such as metadata can come in here, but asset is the only necessary
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  // Used by Google preview to render the full URL
  // Note that this is a string, not an object (slug { current: string })
  slug?: string
}

// And here are the props for the SocialPreview function
interface SocialPreview {
  // Function you'll use to customize which props correspond to which
  prepareFunction: (doc: GenericSanityDoc) => PreparedPreview | undefined
  google?: boolean
  twitter?: boolean
  linkedin?: boolean
  facebook?: boolean
}
```

As it stands, you can't customize styles. I've built this over a year ago and haven't revised the styles yet, so some previews are out of date such as those for Facebook. Feel free to contribute to a refresh, it only requires basic React and CSS knowledge 😄 (be aware that styles are messy though, I literally copied them from each site)

## Possible future improvements

- Mimic the Sanity-native preview object behavior for selecting the required props
  - Currently only `prepare` is provided, meaning you have rewrite everything if you need to change a single field's name. Providing `select` would fix this :)
- Update layouts - LinkedIn and Facebook are wildly different now

Feel free to contribute with your PR, as long as you're respectful. Big thanks to @mornir for your help!
