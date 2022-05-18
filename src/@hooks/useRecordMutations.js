import { notify } from '@templates/SnackBar'
import { useMutation, useQueryClient } from 'react-query'

export const useRecordMutations = (name, service) => {
  const queryClient = useQueryClient()

  const saveRecordMutation = useMutation(service.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  const deleteRecordMutation = useMutation(service.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  return { saveRecordMutation, deleteRecordMutation }
}
