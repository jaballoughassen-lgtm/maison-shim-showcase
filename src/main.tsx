import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BlinkUIProvider, Toaster } from '@blinkdotnew/ui'
import App from './App'
import './index.css'

import { BlinkProvider } from '@blinkdotnew/react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlinkProvider projectId={import.meta.env.VITE_BLINK_PROJECT_ID}>
      <QueryClientProvider client={queryClient}>
        <BlinkUIProvider theme="minimal" darkMode="system">
          <Toaster />
          <div className="flex w-full flex-1 flex-col min-h-0">
            <App />
          </div>
        </BlinkUIProvider>
      </QueryClientProvider>
    </BlinkProvider>
  </React.StrictMode>,
)
