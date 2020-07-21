# geo-reverse
[![7CF](https://img.shields.io/static/v1?label=by&message=7cf148fd&color=fc7&style=flat)](https://7cf148fd.wordpress.com/about-en/) [![VERSION](https://img.shields.io/github/package-json/v/7cf148fd/geo-reverse)](https://github.com/7cf148fd/geo-reverse) [![STATUS](https://img.shields.io/static/v1?label=status&message=public&color=191&style=flat)]() [![LICENSE](https://img.shields.io/static/v1?label=license&message=MIT&color=777&style=flat)](https://opensource.org/licenses/MIT)

## Description

A simple, local and fast module for node.js that returns in which country a geo-location (latitude, longitude) is.

Most other geo-reversing packages rely on (usually expensive) external resources such as Google. This package only uses local data, at the price of large size. This makes geo-reverse incompatible with browser use, sorry about that.

The module returns an Array of Objects:
```js
[ { timeZone: 'time zone name',
    isoAlpha2: '2-letter ISO 3166-1 code',
    isoAlpha3: '3-letter ISO 3166-1 code',
    name: 'country name in the language of your choice (defaulting to English)'
   },
  { ... // additional results in case of uncertainty, territory dispute,
        // or if location is exactly on border
   }
 ]
```

Country codes and country name are set to `undefined` if the location is in the ocean.

Also please note that due to the ever-changing nature of borders, it is essential to keep the package regularly updated.

## Install

`npm install geo-reverse`

## Detailed usage and examples

```js
const geoRev = require('geo-reverse')

// usage: geoRev.country( latitude, longitude )
//        country name will be in English
//
// usage: geoRev.country( latitude, longitude, locale-for-country-name )
//        country name will be in the language set by locale
//        locales are two-letter codes (ISO 639-1)

geoRev.country( 48.858262, 2.294513 )
// [ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: 'France' } ]

geoRey.country( 48.858262, 2.294513, "zh" )
// [ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: '法国' } ]

geoRev.country( 43.839319, 87.526148 )
// [ { timeZone: 'Asia/Urumqi', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' },
//   { timeZone: 'Asia/Shanghai', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' } ]

geoRev.country(0, 0)
// [ { timeZone: 'Etc/GMT', isoAlpha2: undefined, isoAlpha3: undefined, name: undefined } ]
```
