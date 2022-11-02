import React from 'react'

import { Stack, Button, SxProps } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

import AddressForm from '@/components/common/AddressForm/AddressForm'
import KiboDialog from '@/components/common/KiboDialog/KiboDialog'
import { useModalContext } from '@/context/ModalContext'
import type { Address, ContactForm } from '@/lib/types'

interface AddressInputFormDialogProps {
  contact?: ContactForm
  isAddressFormValid: boolean
  isUserLoggedIn: boolean
  setAutoFocus: boolean
  validateForm: boolean
  isAddressFormInDialog?: boolean
  onSaveAddress: (data: Address) => void
  onFormStatusChange: (status: boolean) => void
  onHandleAddressValidationAndSave: () => void
}

const buttonStyle = {
  width: '100%',
  height: '42px',
  textTransform: 'none',
  fontSize: (theme: Theme) => theme.typography.subtitle1,
} as SxProps<Theme> | undefined

const AddressInputFormDialog = (props: AddressInputFormDialogProps) => {
  const {
    contact,
    isAddressFormValid,
    isUserLoggedIn,
    setAutoFocus,
    isAddressFormInDialog = true,
    validateForm,
    onSaveAddress,
    onFormStatusChange,
    onHandleAddressValidationAndSave,
  } = props
  const { closeModal } = useModalContext()
  const { t } = useTranslation('common')
  return (
    <KiboDialog
      showCloseButton
      Title={'Add New Address'}
      showContentTopDivider={true}
      showContentBottomDivider={false}
      Actions={''}
      Content={
        <>
          <AddressForm
            contact={contact}
            isUserLoggedIn={isUserLoggedIn}
            setAutoFocus={setAutoFocus}
            validateForm={validateForm}
            isAddressFormInDialog={isAddressFormInDialog}
            onSaveAddress={onSaveAddress}
            onFormStatusChange={onFormStatusChange}
          />
          <Stack pl={1} gap={2} sx={{ width: '100%' }}>
            <Button variant="contained" color="secondary" onClick={closeModal}>
              {t('cancel')}
            </Button>
            <Button
              variant="contained"
              color="inherit"
              sx={{ ...buttonStyle }}
              {...(!isAddressFormValid && { disabled: true })}
              onClick={onHandleAddressValidationAndSave}
            >
              {t('save')}
            </Button>
          </Stack>
        </>
      }
      customMaxWidth="35rem"
      onClose={closeModal}
    />
  )
}
export default AddressInputFormDialog
