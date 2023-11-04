import { isAfter, isValid, formatDistance } from "date-fns"
import { months } from "../constants/ui.constants"
import { isNumber } from "./utils.helper"
import { SassNumber } from "sass"

export const getStart = (startMonth: number, startYear: number) => {
  const month = months[startMonth]?.shortValue
    ? months[startMonth]?.shortValue
    : ""
  const year = startYear || ""
  const separator = month || year ? " - " : ""
  return `${month} ${year} ${separator}`
}

export const getStartDate = (startMonth: number, startYear: number) => {
  if (!startMonth && startMonth !== 0) return null
  return new Date(startYear, startMonth)
}
interface IGetEndDate {
  endMonth: number
  endYear: number
  isCurrent: boolean
}

export const getEndDate = ({ endMonth, endYear, isCurrent }: IGetEndDate) => {
  if (isCurrent) return new Date()
  if (!endMonth && endMonth !== 0) return null
  return new Date(endYear, endMonth)
}

export const getEnd = ({ endMonth, endYear, isCurrent }: IGetEndDate) => {
  const month = months[endMonth]?.shortValue ? months[endMonth]?.shortValue : ""
  const year = endYear || ""
  return isCurrent ? "present" : `${month} ${year} `
}

export const getPeriod = (start, end = new Date()) => {
  if (!start || isAfter(start, end) || !isValid(start) || !isValid(end))
    return null

  return formatDistance(start, end)
}

export const maskYear = (value) => {
  if (value.length <= 4 && isNumber(value)) {
    return value
  }
  return value.slice(0, -1)
}
