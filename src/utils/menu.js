  module.exports = [
    {
      key: 'dashboard',
      name: 'الرئيسية',
      icon: 'laptop'
    },
    {
      key: 'users',
      name: 'المستخدمون',
      icon: 'user'
    },
    {
      key: 'dashboard/sea',
      name: 'بحري',
      icon: 'dot-chart',
      clickable: false,
      child: [
        {
          icon: 'star-o',
          key: '4',
          name: "ميناء صلالة التجاري"
        },
        {
          icon: 'star-o',
          key: '6',
          name: "ميناء السلطان قابوس"
        }
      ]
    },
    {
      key: 'dashboard/air',
      name: 'جوي',
      icon: 'bar-chart',
      clickable: false,
      child: [
        {
          icon: 'star-o',
          key: '16',
          name: "مطار مسقط الدولي"
        },
        {
          icon: 'star-o',
          key: '21',
          name: "مطار صلالة"
        }
      ]
    },
    {
      key: 'dashboard/land',
      name: 'بري',
      icon: 'pie-chart',
      clickable: false,
      child: [
        {
          icon: 'star-o',
          key: '11',
          name: "مركز شرطة البريمي"
        },
        {
          icon: 'star-o',
          key: '13',
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
          name: 'Search'
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
