import React, { memo } from "react"
import Image from "next/image"
import { iconDownload, iconAlt, cvExtension, cvDocument, cvTitle } from "./data"
import s from "./Pdf.module.scss"

const Pdf = () => (
  <a href={cvDocument} download={cvTitle} className={s.wrap}>
    <Image src={iconDownload} alt={iconAlt} />
    <span className={s.hint}>{cvExtension}</span>
  </a>
)

export default memo(Pdf)
