import React, { memo } from 'react'
import IconLink from '../IconLink'
import { list } from './data'
import s from '../../../public/styles/Social.module.css'

const Social = () => {
  return (
    <div className={s.wrap}>
      {list.map(({ title, image, url }) => (
        <IconLink key={title} image={image} url={url} alt={title} />
      ))}
    </div>
  )
}

export default memo(Social)
