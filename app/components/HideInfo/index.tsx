import { PropsWithoutRef, useState } from 'react'
import s from '../../../public/styles/HideInfo.module.css'

type Props = PropsWithoutRef<{
  info: string
}>
const HideInfo = (props: Props) => {
  const [showFullNumber, setShowFullNumber] = useState(false)
  const fullNumber = props.info
  return (
    <>
      {showFullNumber ? (
        <a className={s.info} href={`tel:${fullNumber}`}>
          {fullNumber}
        </a>
      ) : (
        <>
          <button onClick={() => setShowFullNumber(true)}>Show number</button>
        </>
      )}
    </>
  )
}
export default HideInfo
