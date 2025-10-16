export const useFormModal = () => {
  const isFormModalOpen = useState('formModal', () => false)

  const openFormModal = () => {
    isFormModalOpen.value = true
    // Prevent body scroll when modal is open
    if (process.client) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeFormModal = () => {
    isFormModalOpen.value = false
    // Restore body scroll
    if (process.client) {
      document.body.style.overflow = ''
    }
  }

  return {
    isFormModalOpen,
    openFormModal,
    closeFormModal
  }
}
