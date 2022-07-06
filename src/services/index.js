import userService from  './modules/userService'

const servicesList = [
  userService,
]

export default (context) => {
  class ServiceLocator {}
  context.prototype.$services = new ServiceLocator()
  servicesList.forEach(fn => fn(context))
}
