import { useCallback, useMemo } from 'react'

import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const useCrudNavigate = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { id } = useParams()
  const isNewPage = pathname.endsWith('/new')
  const isEditPage = Boolean(id)
  const isListPage = !isNewPage && !isEditPage

  const basePath = useMemo(() => {
    if (isEditPage) return pathname.replace(`/${id}`, '')
    if (isNewPage) return pathname.replace('/new', '')
    return pathname
  }, [id, isEditPage, isListPage])

  const toNewPage = useCallback(() => navigate(basePath.concat('/new')), [basePath])
  const toListPage = useCallback(() => navigate(basePath), [basePath])
  const toEditPage = useCallback((id) => navigate(basePath.concat('/', id)), [basePath])

  return { toListPage, toEditPage, toNewPage, isListPage, isEditPage, isNewPage, id }
}
