import { useEffect, useState } from 'react'
import { getHealth } from '../services/api/client'

export function useHealthCheck() {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    let mounted = true
    getHealth()
      .then(() => mounted && setStatus('ok'))
      .catch(() => mounted && setStatus('error'))

    return () => {
      mounted = false
    }
  }, [])

  return status
}
