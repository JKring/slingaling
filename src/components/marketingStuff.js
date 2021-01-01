import * as React from 'react'
import Helmet from 'react-helmet'

const BASE_URL = 'https://www.slingaling.com'

const SeoStuff = ({ title, description, path }) => {
  if (title) {
    description = description || `Catapult your puck across the board, ricocheting off the walls to ring your opponent's bell!`
    const metaTags = [
      { name: `description`,
        content: description },
      { property: `og:site_name`,
        content: title },
      { property: `og:title`,
        content: title },
      { property: `og:description`,
        content: description },
      { property: `og:type`,
        content: `website` },
      { name: `twitter:card`,
        content: `summary` },
      { name: `twitter:creator`,
        content: '@jakekring' },
      { name: `twitter:title`,
        content: title },
      { name: `twitter:description`,
        content: description },
    ]
    if (path) {
      metaTags.push({ property: `og:url`,
        content: [BASE_URL, path].join('') })
    }
    return <Helmet
      title={title}
      titleTemplate="Slingaling Dingaling | %s"
      meta={metaTags}
    />
  }

}

const MarketingStuff = ({ title, description, path }) => {
  return (
    <>
      { !!title && SeoStuff({ title, description, path }) }
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZTSN6F2BRH"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZTSN6F2BRH');`}
        </script>
      </Helmet>
    </>
  )
}

export default MarketingStuff