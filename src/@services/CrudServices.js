import axiosInstance from '@utils/axiosInstance'

class CrudServices {
  #path = ''

  constructor(path = '') {
    this.#path = path
  }

  list = (params = {}, config = {}) => axiosInstance.get(this.#path, { params, ...config })
  findOne = (id, config = {}) => axiosInstance.get(`${this.#path}/${id}`, config)
  create = (payload = {}, config = {}) => axiosInstance.post(this.#path, payload, config)
  delete = (id, config = {}) => axiosInstance.delete(`${this.#path}/${id}`, config)
  update = (id, payload = {}, config = {}) =>
    axiosInstance.put(`${this.#path}/${id}`, payload, config)
  save = ({ id, ...payload } = {}, config = {}) => {
    if (id) return this.update(id, payload, config)

    return this.create(payload, config)
  }
}

export default CrudServices
