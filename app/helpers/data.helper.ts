import { type } from "os"

// Prepare data for dropdown search
type Option = [value: string, label: string]

export const prepareStackDataToDropdown = (options: Option) =>
  options.map(({ value }: any) => value)
