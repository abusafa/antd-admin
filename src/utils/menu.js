  module.exports = [
    {
      key: 'dashboard',
      name: 'الرئيسية',
      icon: 'laptop'
    },
    /*{
      key: 'users',
      name: 'المستخدمون',
      icon: 'user'
    },*/
    {
      key: 'dashboard/sea',
      name: 'بحري',
      icon: 'arrow-left',
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
      icon: 'arrow-left',
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
      icon: 'arrow-left',
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
    }
  ]
