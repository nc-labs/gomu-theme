import CrudServices from './CrudServices'

const todoServices = new CrudServices('todos')
todoServices.listAttributes = ['id', 'userId', 'title']

export default todoServices
