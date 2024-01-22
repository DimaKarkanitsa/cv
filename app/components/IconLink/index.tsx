/* eslint-disable @next/next/no-img-element */
import { memo } from 'react'
import s from '../../../public/styles/IconLink.module.css'
import Image from 'next/image'
interface IconLinkProps {
  url: string
  image: string
  alt: string
}

const IconLink = ({ url, image, alt, ...props }: IconLinkProps) => {
  return (
    <a
      className={s.icon}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
      {...props}
    >
      <Image src={image} alt={alt} />
    </a>
  )
}

export default memo(IconLink)
