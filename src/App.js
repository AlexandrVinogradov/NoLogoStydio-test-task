import React from 'react'
import s from './App.module.scss'
import MenuFirstLevel from './components/MenuFirstLevel/MenuFirstLevel'
import MenuSecondLevel from './components/MenuSecondLevel/MenuSecondLevel'

function App() {
  return (
    <div>
      <div className={s.navMenu}>
        <MenuFirstLevel />
      </div>
      <div className={s.secondLevel}>
        <div className={s.navMenu}>
          <MenuSecondLevel />
        </div>
      </div>
    </div>
  )
}

export default App
 