import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import {Children} from '@/types'

const queryClient = new QueryClient()

const Providers = ({children}: Children) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
