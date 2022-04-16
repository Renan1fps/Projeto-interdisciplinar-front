import { SigninButton } from '../SigninButton'
import style from './style.module.scss'
export function Header(){
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logoBranco.png" alt="v2 logo" width='250px'/>
        <nav>
          <a className={style.active}>Home</a>
          <a href='/posts'>Posts</a>
        </nav>
        <SigninButton/>
      </div>
    </header>
  )
}