import React from 'react'
import { Dropdown } from 'antd'
import s from './MenuSecondLevel.module.scss'
import './dropdown.scss'
import icon01 from './MenuSecondLevel__icons/icon-01-menuSecondLevel__lemonade.svg'
import icon02 from './MenuSecondLevel__icons/icon-02-menuSecondLevel__gas.svg'
import icon03 from './MenuSecondLevel__icons/icon-03-menuSecondLevel__flask.svg'
import chevron from './MenuSecondLevel__icons/Chevron.svg'
import chevronWhite from './MenuSecondLevel__icons/Chevron_white.svg'
import menuFood from './dropDown/MenuFoodDropdown'
import menuChemicals from './dropDown/MenuChemicalsDropdown'

const MenuSecondLevel = () => {
  return (
    <ul className={s.menuSecondLevel}>
      <Dropdown overlay={menuFood}>
        <li className={s.menuItem_food}>
          <div>
            <img alt="flat Rack контецнеры" src={icon01} />
          </div>
          <div className={s.menuItem__title_food}>
            <span>перевозка</span>
            <span>пищевых</span>
            <span>грузов</span>
          </div>
          <div>
            <img alt="перевозка пищевых грузов" src={chevron} className={s.chevron} />
          </div>
        </li>
      </Dropdown>

      <li className={s.menuItem_gas}>
        <div>
          <img alt="перевозка сжиженных газов" src={icon02} />
        </div>
        <div className={s.menuItem__title_gas}>
          <span>перевозка</span>
          <span>сжиженных</span>
          <span>газов</span>
        </div>
        <div>
          <img alt="развернуть меню" src={chevronWhite} className={s.chevron_white} />
        </div>
      </li>

      <Dropdown overlay={menuChemicals}>
        <li className={s.menuItem_chemists}>
          <div>
            <img alt="перевозка химических грузов" src={icon03} />
          </div>
          <div className={s.menuItem__title_chemists}>
            <span>перевозка</span>
            <span>химических</span>
            <span>грузов</span>
          </div>
          <div>
            <img alt="развернуть меню" src={chevronWhite} className={s.chevron_white} />
          </div>
        </li>
      </Dropdown>
    </ul>
  )
}

export default MenuSecondLevel
