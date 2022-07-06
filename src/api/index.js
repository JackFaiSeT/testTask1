import userMethods from './modules/userMethods'

const apiList = [userMethods]

export default (context) => {
  class APILocator {}
  context.prototype.$api = new APILocator()
  apiList.forEach(fn => fn(context))
}
