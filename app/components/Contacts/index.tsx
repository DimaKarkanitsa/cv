import { phone, mail } from "./data"
import s from "./Contacts.module.scss"
import { useState } from "react"
import { set } from "date-fns"

const PhoneNumber = (props: any) => {
  const [showFullNumber, setShowFullNumber] = useState(false)
  const fullPhoneNumber = props.phone
  const phone = props.phone.slice(0, 6)
  return (
    <div>
      <span>&#128222;</span>
      {showFullNumber ? (
        <a className={s.phone} href={`tel:${fullPhoneNumber}`}>
          {fullPhoneNumber}
        </a>
      ) : (
        <>
          <span className={s.phone}>{phone}</span>
          <button onClick={() => setShowFullNumber(true)}>Show number</button>
        </>
      )}
    </div>
  )
}
export const Contacts = () => {
  return (
    <div className={s.wrap}>
      <PhoneNumber phone={phone} />
      <span className={s.separator} />
      <a href={`mailto:${mail}`} className={s.mail}>
        {mail}
      </a>
    </div>
  )
}
