const geoTz = require('geo-tz')
const countries = require('i18n-iso-countries')
const locales = require('iso-639-1')
const isoList = require('./isoList.json')

function verifyLatLng( lat, lng, locale )
{ if ( isNaN(lat) || isNaN(lng) ) { return( false ) }
  return ( (lat <= 90 ) && (lat >= -90) && (lng <= 180) && (lng >= -180) ) 
 }

function verifyLocale( locale )
{ return ( locales.validate(locale) )
 }

function country( lat, lng, locale )
{ if ( !locale ) { locale="en" }
  else { if ( ! verifyLocale( locale ) ) { throw new Error('invalid locale') } }

  if( ! verifyLatLng( lat, lng ) ) { throw new Error('invalid coordinates') }
  var ret = []
  try { var tz = geoTz(lat, lng) }
  catch( err ) { throw new Error('invalid coordinates') }

  tz.forEach( timeZone =>
  { var location = { timeZone:'', isoAlpha2:undefined, isoAlpha3:undefined, name:undefined }
    location['timeZone'] = timeZone
    if( ! location.timeZone )
    { return( undefined ) }

    location['isoAlpha2'] = isoList[ timeZone ]
    if( location.isoAlpha2 )
    { location['isoAlpha3'] = countries.alpha2ToAlpha3( location.isoAlpha2 )
      location['name'] = countries.getName( location.isoAlpha2, locale )
      ret.push( location )
     }
    else
    { 
      ret.push( location )
     }
   })
  return( ret )
 }
exports.country = country

function isoAlpha2( lat, lng, locale )
{ return geoTz(lat, lng)
 }
exports.isoAlpha2 = isoAlpha2

function isoAlpha3( lat, lng, locale )
{ return geoTz(lat, lng)
 }
exports.isoAlpha3 = isoAlpha3

