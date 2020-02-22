import React from 'react'
import { Menu } from 'antd'
import chevronRight from '../MenuSecondLevel__icons/Chevron Right.svg'

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

export default menuChemicals