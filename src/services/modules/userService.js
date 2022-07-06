import { usersAdapter } from "@/adapters/userAdapter"

export default context => {
  class UserService  {
    static #userMethods = context.prototype.$api.user

    async getUsers() {
      const result = await UserService.#userMethods.getUsers()
      console.log(result);
      return usersAdapter(result)
    }
  }
  context.prototype.$services.user = new UserService()
}