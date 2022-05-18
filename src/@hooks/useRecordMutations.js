import { notify } from '@templates/SnackBar'
import { useMutation, useQueryClient } from 'react-query'

export const useRecordMutations = (name, saveHandler, deleteHanlder) => {
  const queryClient = useQueryClient()

  const saveRecordMutation = useMutation(saveHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries(name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  const deleteRecordMutation = useMutation(deleteHanlder, {
    onSuccess: () => {
      queryClient.invalidateQueries(name)
      notify.success('Thành công!')
    },
    onError: () => notify.error('Thất bại!'),
  })

  return { saveRecordMutation, deleteRecordMutation }
}
