import { isAfter, isValid, formatDistance } from "date-fns"

export const getPeriod = (start: Date, end = new Date()) => {
  if (!start || isAfter(start, end) || !isValid(start) || !isValid(end))
    return null

  return formatDistance(start, end)
}
