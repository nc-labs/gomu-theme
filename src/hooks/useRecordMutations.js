import { notify } from 'modules/SnackBar'
import { useMutation, useQueryClient } from 'react-query'

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
