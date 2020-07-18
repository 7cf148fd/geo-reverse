const assert = require('assert')
const geoReverse = require('../')
const describe = require('mocha').describe
const it = require('mocha').it

testList = { 'wrong lat value': { data:[ 100, 0 ], expected:'error' }
           , 'wrong lng value': { data:[ 0, 200 ], expected:'error' }
           , 'wrong locale': { data:[ 48.858262, 2.294513, 'xx' ], expected:'error' }
           , 'simferopol': { data:[ 44.952146, 34.102475 ]
                           , expected:[ { timeZone: 'Europe/Simferopol', isoAlpha2: 'UA', isoAlpha3: 'UKR', name: 'Ukraine' } ] }
           , 'hand island': { data:[ 80.826506, -66.452809 ]
                            , expected:[ { timeZone: 'America/Pangnirtung', isoAlpha2: 'CA', isoAlpha3: 'CAN', name: 'Canada' } ] }
           , 'paris, no locale': { data:[ 48.858262, 2.294513 ]
                       , expected:[ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: 'France' } ] }
           , 'paris, ZH locale': { data:[ 48.858262, 2.294513, 'zh' ]
                       , expected:[ { timeZone: 'Europe/Paris', isoAlpha2: 'FR', isoAlpha3: 'FRA', name: '法国' } ] }
           , 'null island': { data:[ 0, 0 ]
                            , expected:[ { timeZone: 'Etc/GMT', isoAlpha2: undefined, isoAlpha3: undefined, name: undefined } ] }
           , 'urumqi, two zones': { data:[ 43.839319, 87.526148 ]
                       , expected:[ { timeZone: 'Asia/Urumqi', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' }, { timeZone: 'Asia/Shanghai', isoAlpha2: 'CN', isoAlpha3: 'CHN', name: 'China' } ] }
            }

for (var location in testList)
{ var testData = testList[location].data
  var expectedData = testList[location].expected
  describe( 'testing '+location, function ()
  { it( 'should return '+JSON.stringify(expectedData), function ()
    { try
      { if ( testData.length == 2)
        { assert.equal(geoReverse.country( testData[0], testData[1] ), expectedData) }
        if ( testData.length == 3)
        { assert.equal(geoReverse.country( testData[0], testData[1], testData[2] ), expectedData) }
       }
      catch (e) { if ( expectedData = 'error' ) assert( true, true ) }
     })
   })
 }
