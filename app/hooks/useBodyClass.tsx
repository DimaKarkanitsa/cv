import { useEffect } from "react"

const addBodyClass = (className: string) =>
  document.body.classList.add(className)
const removeBodyClass = (className: string) =>
  document.body.classList.remove(className)

const useBodyClass = (className: string) => {
  useEffect(() => {
    addBodyClass(className)
    return () => removeBodyClass(className)
  }, [className])
}
export default useBodyClass
