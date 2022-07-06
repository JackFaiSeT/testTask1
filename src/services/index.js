import useAPI from './modules/apiClientService'
import userService from  './modules/userService'

const servicesList = [
  useAPI,
  userService,
]

export default (context) => {
  class ServiceLocator {}
  context.prototype.$services = new ServiceLocator()
  servicesList.forEach(fn => fn(context))
}
