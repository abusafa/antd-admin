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
    key: 'seaport',
    name: 'بحري',
    icon: 'dot-chart',
    clickable: false,
    child: [
      {
        icon: 'star-o',
        key: 'id_4',
        name: "ميناء صلالة التجاري"
      },
      {
        icon: 'star-o',
        key: 'id_6',
        name: "ميناء السلطان قابوس"
      }
    ]
  },
  {
    key: 'airport',
    name: 'جوي',
    icon: 'bar-chart',
    clickable: false,
    child: [
      {
        icon: 'star-o',
        key: 'id_16',
        name: "مطار مسقط الدولي"
      },
      {
        icon: 'star-o',
        key: 'id_21',
        name: "مطار صلالة"
      }
    ]
  },
  {
    key: 'borderport',
    name: 'بري',
    icon: 'pie-chart',
    clickable: false,
    child: [
      {
        icon: 'star-o',
        key: 'id_11',
        name: "مركز شرطة البريمي"
      },
      {
        icon: 'star-o',
        key: 'id_13',
        name: "مركز شرطة الوجاجة"
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
