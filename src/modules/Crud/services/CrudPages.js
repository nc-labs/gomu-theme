import { useMemo } from 'react'

import { merge } from 'lodash'
import { useTranslation } from 'react-i18next'

import crudConfigs from '../configs'
import { useRecordDetails as useRecordDetailsHook } from '../hooks/useRecordDetails'
import { useRecordList as useRecordListHook } from '../hooks/useRecordList'
import { useRecordMutations as useRecordMutationsHook } from '../hooks/useRecordMutations'

import CrudServices from './CrudServices'

class CrudPages {
  #attributes = []
  #translation = 'common'

  listOptions = {
    pagination: crudConfigs.table.defaultPagination,
    selectable: crudConfigs.table.defaultSelections,
  }

  constructor(name, path = '') {
    this.service = new CrudServices(name, path)
  }

  /** @param {(string | TColumnObject)[]} attributes */
  setListAttributes = (attributes) => {
    this.#attributes = attributes
    return this
  }

  setTranslation = (namespace = 'common') => {
    this.#translation = namespace
    return this
  }

  /** @param {typeof this.listOptions} options */
  setListOptions = (options) => {
    this.listOptions = merge(this.listOptions, options)
    return this
  }

  useRecordList = () => useRecordListHook(this.service)
  useRecordDetails = () => useRecordDetailsHook(this.service)
  useRecordMutations = () => useRecordMutationsHook(this.service)
  useColumns = () => {
    const { t } = useTranslation(this.#translation)

    const columns = useMemo(() => {
      if (!Array.isArray(this.#attributes)) return []

      return this.#attributes.map((option) =>
        typeof option === 'object'
          ? (() => {
              const { name, width, ...props } = option

              return {
                Header: t(`table.${name}`),
                accessor: name,
                width: width || 'auto',
                ...props,
              }
            })()
          : {
              Header: t(`table.${option}`),
              accessor: option,
              width: 'auto',
            }
      )
    }, [t])
    return columns
  }
}

export default CrudPages

/**
 * @typedef TColumnObject
 * @type {object}
 * @property {string} name
 * @property {string | number} [width]
 * @property {string} [className]
 */
