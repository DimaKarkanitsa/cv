import React, { memo } from "react"
import PropTypes from "prop-types"
import s from "./IconLink.module.scss"
import Image from "next/image"
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
    <Image src={image} alt={alt} />
  </a>
)

IconLink.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default memo(IconLink)
