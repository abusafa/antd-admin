import React from 'react'
import { Icon, Switch } from 'antd'
import styles from './main.less'
import { config } from '../../utils'
import Menus from './menu'

function Sider ({ siderFold, darkTheme, location, changeTheme }) {
  const menusProps = {
    siderFold,
    darkTheme,
    location
  }
  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps} className={styles.siderMenu} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type='bulb' />تغيير الألوان</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren='داكن' unCheckedChildren='فاتح' />
      </div> : ''}
    </div>
  )
}

export default Sider
