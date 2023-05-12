import { useEffect, useState } from 'react'
import Router from 'next/router'

export const useLoading = () => {
  const [loading, setLoading] = useState(true)

  const start = () => setLoading(true)
  const end = () => setLoading(false)

  useEffect(() => {
    setLoading(false)
  }, [])

  return { loading }
}
