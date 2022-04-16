import style from './style.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from "next-auth/react"

export function SigninButton() {
  const { data: session } = useSession();
  return session ? (
    <button className={style.signinButton}>
      <FaGithub color='#84d361' />
      {session.user.name}
      <FiX color='#737380' className={style.closeIcon} onClick={() => signOut()} />
    </button>
  ) : (
    <button
      type='button'
      className={style.signinButton}
      onClick={() => signIn('github')}>
      <FaGithub color='#eba417' />
      Realizar login
    </button>
  )
}