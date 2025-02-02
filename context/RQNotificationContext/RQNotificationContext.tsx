import { createContext, ReactNode, useContext, useState, forwardRef } from 'react'

import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { QueryClientProvider } from 'react-query'

import { generateQueryClient } from '@/lib/react-query/queryClient'

interface SnackbarContextType {
  snackbarInfo: SnackbarStateType
  showSnackbar: (message: string, type: AlertColor) => void
  hideSnackbar: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

interface SnackbarStateType {
  visible: boolean
  message: string
  type: AlertColor
}

interface RQNotificationContextProviderProps {
  children: ReactNode
}

export const SnackbarContext = createContext({
  snackbarInfo: {
    visible: false,
    message: '',
    type: 'info',
  },
  showSnackbar: () => null,
  hideSnackbar: () => null,
} as SnackbarContextType)

export const RQNotificationContextProvider = ({ children }: RQNotificationContextProviderProps) => {
  const [snackbarInfo, setSnackbarInfo] = useState<SnackbarStateType>({
    visible: false,
    message: '',
    type: 'info',
  })
  const [queryClient] = useState(() => generateQueryClient)

  const showSnackbar = (message: string, type: AlertColor) => {
    setSnackbarInfo({
      ...snackbarInfo,
      visible: true,
      message,
      type,
    })
  }

  const hideSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarInfo({
      ...snackbarInfo,
      visible: false,
      message: '',
    })
  }

  const values = {
    snackbarInfo,
    showSnackbar,
    hideSnackbar,
  }
  return (
    <SnackbarContext.Provider value={values}>
      <QueryClientProvider client={queryClient(showSnackbar)}>{children}</QueryClientProvider>
    </SnackbarContext.Provider>
  )
}

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)
  if (context === undefined) throw new Error('useContext must be inside a Provider with a value')
  return context
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const SnackbarRoot = () => {
  const { snackbarInfo, hideSnackbar } = useSnackbarContext()

  return (
    <Snackbar
      open={snackbarInfo.visible}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
      onClose={hideSnackbar}
    >
      <Alert onClose={hideSnackbar} severity={snackbarInfo.type} sx={{ width: '100%' }}>
        {snackbarInfo.message}
      </Alert>
    </Snackbar>
  )
}
