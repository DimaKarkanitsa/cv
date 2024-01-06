/* eslint-disable @next/next/no-img-element */
import React, { memo } from 'react'
import s from './IconLink.module.scss'
interface IconLinkProps {
  url: string
  image: string
  alt: string
}

const IconLink = ({ url, image, alt, ...props }: IconLinkProps) => (
  <a
    className={s.icon}
    href={url}
    target='_blank'
    rel='noreferrer noopener'
    {...props}
  >
    <img src={image} alt={alt} />
  </a>
)

export default memo(IconLink)
