import axiosInstance from 'utils/axiosInstance'

class CrudServices {
  name = ''
  #path = ''

  constructor(name, path = '') {
    this.name = name
    this.#path = path || name
  }

  /** @type {(parmas?: object, config?: object) => Promise<any>} */
  list = (params = {}, config = {}) => axiosInstance.get(this.#path, { params, ...config })

  /** @type {(id: string, config?: object) => Promise<any>} */
  findOne = (id, config = {}) => axiosInstance.get(`${this.#path}/${id}`, config)

  /** @type {(payload: object, config?: object) => Promise<any>} */
  create = (payload = {}, config = {}) => axiosInstance.post(this.#path, payload, config)

  /** @type {(payload: object, config?: object) => Promise<any>} */
  update = (id, payload = {}, config = {}) =>
    axiosInstance.put(`${this.#path}/${id}`, payload, config)

  /** @type {(payload: object, config?: object) => Promise<any>} */
  save = ({ id, ...payload } = {}, config = {}) => {
    if (id) return this.update(id, payload, config)

    return this.create(payload, config)
  }

  /** @type {(id: string, config?: object) => Promise<any>} */
  delete = (id, config = {}) => axiosInstance.delete(`${this.#path}/${id}`, config)
}

export default CrudServices
