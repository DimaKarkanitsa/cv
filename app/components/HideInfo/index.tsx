import s from "./HideInfo.module.scss"
import { PropsWithoutRef, useState } from "react"

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
