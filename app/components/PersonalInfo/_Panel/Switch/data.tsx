import React from "react"
import Image from "next/image"
import iconMoon from "./IconMoon.svg"
import iconSun from "./IconSun.svg"

export const options = [
  {
    title: "light",
    element: <Image src={iconSun} alt='light theme switcher' />,
  },
  {
    title: "dark",
    element: <Image src={iconMoon} alt='dark theme switcher' />,
  },
]
