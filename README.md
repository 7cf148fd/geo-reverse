# geo-reverse
[![7CF](https://img.shields.io/static/v1?label=author&message=7cf&color=7cf&style=flat)](http://sept.cf) [![STATUS](https://img.shields.io/static/v1?label=status&message=public&color=191&style=flat)]() [![LICENSE](https://img.shields.io/static/v1?label=license&message=MIT&color=777&style=flat)](https://opensource.org/licenses/MIT)

## Install

`npm install reverse-geo`

## Usage

```js
    const reverseGeo = require('reverse-geo')

    reverseGeo(47.650499, -122.350070)
	// [{ 'country':'United States', 'iso3166-2':'US', 'iso3166-3':'USA' }]
    reverseGeo(43.839319, 87.526148)  // ['Asia/Shanghai', 'Asia/Urumqi']
	// [{ 'country':'Asia/Shanghai', 'iso3166-2':'CN', 'iso3166-3':'CHN' }]
    reverseGeo(0, 0)  // ['Etc/GMT', undefined, undefined]
```

## API Docs
The API now returns a list of possible countries and timezones. There are certain coordinates where the answer will depend on the person you ask (eg, Crimea) or if the location is exactly on the border.

Most other packages rely on (expensive) external resources fetched. This package only uses local resources, at the price of large size, due to the `geo-tz` dependency. This makes it incompatible with browser use, sorry about that.

### reverseGeo(lat, lon)
Returns the list of countries found at `lat`, `lon`.
The underlying data is identified using a local database 

## UPDATES
### 20200716

## COPYRIGHT
Copyright 2020 7cf148fd

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
