import { useEffect, useState } from 'react'

export const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    
  }, [])

  return path
}

const Router = (props) => {
  const { routes } = props
  const path = useRoute()
  const Page = routes[path] ?? routes['*']

  return <Page />
}

export default Router
