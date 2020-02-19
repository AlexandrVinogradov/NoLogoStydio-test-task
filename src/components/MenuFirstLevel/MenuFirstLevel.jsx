import React from 'react'
import s from './MenuFirstLevel.module.scss'
import icon01 from './MenuFirstLevel__icons/icon-01-menuFirstLevel.svg'
import icon02 from './MenuFirstLevel__icons/icon-02-menuFirstLevel.svg'
import icon03 from './MenuFirstLevel__icons/icon-03-menuFirstLevel.svg'
import icon04 from './MenuFirstLevel__icons/icon-04-menuFirstLevel.svg'
import icon05 from './MenuFirstLevel__icons/icon-05-menuFirstLevel.svg'

const MenuFirstLevel = () => {
  return (
      <ul className={s.menuFirstLevel}>
        <li className={s.menuItem_flatRack}>
          <div>
            <img alt="flat Rack контецнеры" src={icon01} />
          </div>
          <div className={s.menuItem__title_grey}>
            <span>Flat Rack</span>
            <span>контейнеры</span>
          </div>
        </li>
        <li className={s.menuItem_openTop}>
          <div>
            <img alt="Опен топ контецнеры" src={icon02} />
          </div>
          <div className={s.menuItem__title_blue}>
            <span>Опен топ</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li className={s.menuItem_tankConteiner}>
          <div>
            <img alt="Танк-топ контецнеры" src={icon03} />
          </div>
          <div className={s.menuItem__title_white}>
            <span>Танк-</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li className={s.menuItem_termConteiner}>
          <div>
            <img alt="Термо-контецнеры" src={icon04} />
          </div>
          <div className={s.menuItem__title_grey}>
            <span>Термо-</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li className={s.menuItem_universalConteiner}>
          <div>
            <img alt="Универсальный контецнеры" src={icon05} />
          </div>
          <div className={s.menuItem__title_grey}>
            <span>Универсальный</span>
            <span>Контейнер</span>
          </div>
        </li>
      </ul>
  )
}

export default MenuFirstLevel
