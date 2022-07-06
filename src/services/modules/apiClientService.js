import FetchService from '@/services/modules/apiServices/fetchService'

class APIClient {
  constructor(client, context) {
    this.client = client
    this.context = context
  }

  async request(data = {}) {
    return await this.client.request(data, this.context)
  }
}

export default context => {
  context.prototype.$services.useAPI = new APIClient(new FetchService(), context)
}
