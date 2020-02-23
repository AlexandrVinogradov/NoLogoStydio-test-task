import React from 'react'
import { Menu, Dropdown } from 'antd'
import PropTypes from 'prop-types'
import s from './DeployHidden.module.scss'
import { TermContainer, TankContainer, OpenContainer, UniContainer } from './MenuItems'

export const HiddenMenu = props => {
  const { isHideTerm, isHideTank, isHideOpen } = props
  return (
    <Menu>
      <UniContainer />
      {isHideTerm ? <TermContainer /> : null}
      {isHideTank ? <TankContainer /> : null}
      {isHideOpen ? <OpenContainer /> : null}
    </Menu>
  )
}

const DeployHidden = props => {
  const { isHideOpen, isHideTank, isHideTerm } = props
  return (
    <Dropdown overlay={() => <HiddenMenu isHideOpen={isHideOpen} isHideTank={isHideTank} isHideTerm={isHideTerm} />}>
      <div className={s.dotsBlockParent}>
        <div className={s.dotsBlock}>
          <div className={s.dotsBlock__dot}> </div>
          <div className={s.dotsBlock__dot}> </div>
          <div className={s.dotsBlock__dot}> </div>
        </div>
      </div>
    </Dropdown>
  )
}

HiddenMenu.propTypes = {
  isHideOpen: PropTypes.bool.isRequired,
  isHideTank: PropTypes.bool.isRequired,
  isHideTerm: PropTypes.bool.isRequired,
}
DeployHidden.propTypes = {
  isHideOpen: PropTypes.bool.isRequired,
  isHideTank: PropTypes.bool.isRequired,
  isHideTerm: PropTypes.bool.isRequired,
}

export default DeployHidden
