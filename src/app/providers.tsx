'use client'

import { I18nProvider } from '@/i18n-context'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ChakraProvider>
  )
}