/* eslint-disable @next/next/no-img-element */
import { memo } from 'react'
import { title } from './data'
import { stack } from './constants'
import s from '../../../public/styles/Stack.module.css'
import Image from 'next/image'
const Stack = () => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <div className={s.stack}>
        {stack.map(({ value, image }) => (
          <div className={s.block} key={value}>
            <Image loading='lazy' src={image} alt={value} />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </>
  )
}
export default memo(Stack)
