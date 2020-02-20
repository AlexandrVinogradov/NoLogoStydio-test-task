import React from 'react'
import {
  Menu,
  Dropdown,
  // Icon
} from 'antd'
import s from './MenuSecondLevel.module.scss'
import './menu.scss'
import icon01 from './MenuSecondLevel__icons/icon-01-menuSecondLevel__lemonade.svg'
import icon02 from './MenuSecondLevel__icons/icon-02-menuSecondLevel__gas.svg'
import icon03 from './MenuSecondLevel__icons/icon-03-menuSecondLevel__flask.svg'
import chevronRight from './MenuSecondLevel__icons/Chevron Right.svg'
import chevron from './MenuSecondLevel__icons/Chevron.svg'
import chevronWhite from './MenuSecondLevel__icons/Chevron_white.svg'

const menuFood = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Спирты пищевые
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Масла
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Соки
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Концентраты соков
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Пищевые добавки
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Патока
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Виноматериал
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        Прочее
      </a>
    </Menu.Item>
  </Menu>
)

const menuChemicals = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="acid">Кислоты</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Фенол расплавленный</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="alkalis">Щелочи</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Олеум</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="alcohols">Спирты</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Хлоная кислота</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="solvents">Растворители</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Нитрилакриловая кислота</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="salt">Соли</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Серная кислота</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="esters">Эфиры</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Азотная кислота</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="chlorides">Хлориды</span> <img alt="перевозка химических грузов" src={chevronRight} />
        <a href="/">Ортофосфорная кислота</a>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <span className="other">Прочее</span> <img alt="перевозка химических грузов" src={chevronRight} />
      </a>
    </Menu.Item>
  </Menu>
)

const MenuSecondLevel = () => {
  //   <Dropdown overlay={menu}>
  //   <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
  //     Hover me <Icon type="down" />
  //   </a>
  // </Dropdown>

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
