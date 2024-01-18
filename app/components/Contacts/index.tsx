import { phone, mail } from './data'
import s from '../../../public/styles/Contacts.module.css'
import HideInfo from '../HideInfo'

export const Contacts = () => {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <span>tel:</span>
        <HideInfo info={phone} />
      </div>
      <div className={s.container}>
        <span>mail:</span>
        <HideInfo info={mail} />
      </div>
    </div>
  )
}
