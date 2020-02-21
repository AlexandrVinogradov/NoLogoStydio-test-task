import React from 'react'
import s from './MenuFirstLevel.module.scss'
import icon01 from './MenuFirstLevel__icons/icon-01-menuFirstLevel.svg'
import icon02 from './MenuFirstLevel__icons/icon-02-menuFirstLevel.svg'
import icon03 from './MenuFirstLevel__icons/icon-03-menuFirstLevel.svg'
import icon04 from './MenuFirstLevel__icons/icon-04-menuFirstLevel.svg'
import icon05 from './MenuFirstLevel__icons/icon-05-menuFirstLevel.svg'

class MenuFirstLevel extends React.Component {
  constructor(props) {
    super(props)

    this.flatConteinerRef = React.createRef()
    this.openConteinerRef = React.createRef()
    this.tankConteinerRef = React.createRef()
    this.termConteinerRef = React.createRef()
    this.uniConteinerRef = React.createRef()

    this.state = {
      windowWidth: window.innerWidth,

      flatConteinerWidth: 0,
      openConteinerWidth: 0,
      tankConteinerWidth: 0,
      termConteinerWidth: 0,
      uniConteinerWidth: 0,

      navWidth: 0,
      isHide: false,
    }
  }

  navWidthCalculate = () => {
    const {
      flatConteinerWidth,
      openConteinerWidth,
      tankConteinerWidth,
      termConteinerWidth,
      uniConteinerWidth,
    } = this.state

    this.setState({
      navWidth: flatConteinerWidth + openConteinerWidth + tankConteinerWidth + termConteinerWidth + uniConteinerWidth,
    })
  }

  test = () => {
    const { windowWidth, navWidth } = this.state
    if (windowWidth < navWidth) {
      this.setState({
        isHide: true,
      })
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize)
    // console.log(this.flatConteinerRef.current.offsetWidth)
    // setTimeout(() => {
    //   console.log(this.flatConteinerRef.current.offsetWidth)
    //   console.log(this.flatConteinerRef)
    // }, 1000)

    this.setState(
      {
        flatConteinerWidth: this.flatConteinerRef.current.clientWidth,
        openConteinerWidth: this.openConteinerRef.current.clientWidth,
        tankConteinerWidth: this.tankConteinerRef.current.clientWidth,
        termConteinerWidth: this.termConteinerRef.current.clientWidth,
        uniConteinerWidth: this.uniConteinerRef.current.clientWidth,
      },
      () => {
        this.navWidthCalculate()
      }
    )
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  render() {
    // console.log(this.state.navWidth);
    return (
      <ul className={s.menuFirstLevel}>

        <li ref={this.flatConteinerRef} className={s.menuItem_flatRack}>
          <div>
            <img alt="flat Rack контецнеры" src={icon01} />
          </div>
          <div className={s.menuItem__title_grey}>
            <span>Flat Rack</span>
            <span>контейнеры</span>
          </div>
        </li>

        <li ref={this.openConteinerRef} className={s.menuItem_openTop}>
          <div>
            <img alt="Опен топ контецнеры" src={icon02} />
          </div>
          <div className={s.menuItem__title_blue}>
            <span>Опен топ</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li ref={this.tankConteinerRef} className={s.menuItem_tankConteiner}>
          <div>
            <img alt="Танк-топ контецнеры" src={icon03} />
          </div>
          <div className={s.menuItem__title_white}>
            <span>Танк-</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li ref={this.termConteinerRef} className={s.menuItem_termConteiner}>
          <div>
            <img alt="Термо-контецнеры" src={icon04} />
          </div>
          <div className={s.menuItem__title_grey}>
            <span>Термо-</span>
            <span>Контейнеры</span>
          </div>
        </li>
        <li ref={this.uniConteinerRef} className={s.menuItem_universalConteiner}>
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
}

export default MenuFirstLevel
