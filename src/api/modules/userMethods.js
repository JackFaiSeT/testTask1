import endpoints from '@/config/api-endpoints'

export default context => {
  class UserMethods {
    async getUsers() {
      const config = endpoints.users.getUsers
      const result = await fetch(config.url, config.options)
      return result?.ok ? result.json() : []
    }
  }
  context.prototype.$api.user = new UserMethods()
}
