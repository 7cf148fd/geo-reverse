# geo-reverse
[![7CF](https://img.shields.io/static/v1?label=author&message=7cf&color=7cf&style=flat)](http://sept.cf) [![VERSION](https://img.shields.io/github/package-json/v/7cf148fd/geo-reverse)](https://github.com/7cf148fd/geo-reverse) [![STATUS](https://img.shields.io/static/v1?label=status&message=public&color=191&style=flat)]() [![LICENSE](https://img.shields.io/static/v1?label=license&message=MIT&color=777&style=flat)](https://opensource.org/licenses/MIT)

A simple, local and fast module for node.js that returns in which country a geo-location (latitude, longitude) is.

Most other geo-reversing packages rely on (usually expensive) external resources fetched. This package only uses local resources, at the price of large size, due to the `geo-tz` dependency. This makes geo-reverse incompatible with browser use, sorry about that.

Returns an Array of Objects:
```js
[ { timeZone: 'time zone name',
    isoAlpha2: '2-letter ISO 3166-1 code',
    isoAlpha3: '3-letter ISO 3166-1 code',
    name: 'country name in the language of your choice (defaulting to English)'
   },
  { ... // additional results in case of uncertainty, territory dispute, or location is on border
   }
 ]
```

Country codes and country name are set to `undefined` if the location is in the ocean.

Also please note that due to the ever-changing nature of borders, it is essential to keep the package regularly updated.

## Install

`npm install geo-reverse`

## Detailed usage

```js
const geoRev = require('geo-reverse')

// usage: geoRev( latitude, longitude ) <- country name will be in English
// usage: geoRev( latitude, longitude, locale-for-country-name ) <- country name will be in language set by locale
//        locales are two-letter codes (ISO 639-1)

geoRev( 48.858262, 2.294513 )
// [ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: 'France' } ]

geoRev( 48.858262, 2.294513, "zh" )
// [ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: '法国' } ]

geoRev(43.839319, 87.526148)
// [ { timeZone: 'Asia/Urumqi', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' }, { timeZone: 'Asia/Shanghai', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' } ]

geoRev(0, 0)
// [ { timeZone: 'Etc/GMT', isoAlpha2: undefined, isoAlpha3: undefined, name: undefined } ]
```

## COPYRIGHT
Copyright 2020 7cf148fd

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
