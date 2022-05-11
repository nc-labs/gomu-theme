import { useMutation, useQueryClient } from 'react-query'
import { notify } from 'templates/SnackBar'

export const useRecordMutations = (service) => {
  const queryClient = useQueryClient()

  const saveRecordMutation = useMutation(service.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(service.name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  const deleteRecordMutation = useMutation(service.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(service.name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  return { saveRecordMutation, deleteRecordMutation }
}
