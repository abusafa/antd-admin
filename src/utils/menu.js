module.exports = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'laptop'
  },
  {
    key: 'users',
    name: 'Users',
    icon: 'user'
  },
  {
    key: 'ui1',
    name: 'UI components',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Ico Icon'
      },
      {
        key: 'search',
        name: 'Search 搜索'
      }
    ]
  },
  {
    key: 'ui',
    name: 'UI components',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Ico Icon'
      },
      {
        key: 'search',
        name: 'Search 搜索'
      }
    ]
  },
  {
    key: 'navigation',
    name: 'Navigation',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: 'navigation1'
      },
      {
        key: 'navigation2',
        name: 'navigation2',
        child: [
          {
            key: 'navigation21',
            name: 'navigation21'
          },
          {
            key: 'navigation22',
            name: 'navigation22'
          }
        ]
      }
    ]
  }
]
