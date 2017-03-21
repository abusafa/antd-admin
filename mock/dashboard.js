import {color} from '../src/utils/theme'
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'
import {filter, sumBy,find} from 'lodash'

import Outlets from './oman/outlets.json';
import OutletsDB from './oman/db.json';
//var OutletsDB = []


// fetch('./oman/db.json')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//     OutletsDB = json;
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

let dataKey = mockStorge('Dashboard', Mock.mock({
  'db': OutletsDB,
  'outlets': Outlets,
  'sales|8': [
    {
      'name|+1': 2008,
      'Clothes|200-500': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1
    }
  ],
  'cpu': {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1
      }
    ]
  },
  'browser': [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1
    }
  ],
  user: {
    name: 'zuiidea',
    email: 'zuiiidea@.gmail.com',
    sales: 3241,
    sold: 3556,
    avatar: 'http://tva4.sinaimg.cn/crop.0.0.996.996.180/6ee6a3a3jw8f0ks5pk7btj20ro0rodi0.jpg'
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1
    }
  ],
  'countries':[
    {
      flag: 'sa',
      name: 'السعودية',
      'value|2000000-10000000': 1
    },
    {
      flag: 'in',
      name: 'الهند',
      'value|2000000-10000000': 1
    },
    {
      flag: 'my',
      name: 'ماليزيا',
      'value|2000000-10000000': 1
    },
    {
      flag: 'es',
      name: 'اسبانيا',
      'value|2000000-10000000': 1
    },
    {
      flag: 'za',
      name: 'جنوب إفريقيا',
      'value|2000000-10000000': 1
    }
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar: function () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      }
    }
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date: function () {
        return Mock.Random.integer(2015, 2016) + '-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      'price|10-200.1-2': 1
    }
  ],
  quote: {
    title: 'مؤشرات احصائية رسمية عن سلطنة عمان',
    content: `هذه البوابة توفر مؤشرات احصائية رسمية  ذات سلاسل زمنية طويلة عن سلطنة عمان`,
  },
  numbers: [
    {
      icon: 'up',
      color: color.green,
      title: 'الصادرات',
      number: sumBy(filter(OutletsDB, (o)=> o.in_out === 'out' ), (o)=> o.value)
    }, {
      icon: 'down',
      color: color.blue,
      title: 'الواردات',
      number: sumBy(filter(OutletsDB, (o)=> o.in_out === 'in' ), (o)=> o.value)
    }, {
      icon: 'retweet',
      color: color.red,
      title: 'إعادة تصدير',
      number: 1023006123
    }
  ]
}))

module.exports = {
  'GET /api/dashboard' (req, res) {
    res.json(global[dataKey])
  }
}
