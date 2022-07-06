class FetchService {
  async request({ config }) {
    try {
      const url = process.env.VUE_APP_API_URL + (config.url || '')
      const options = config.options || {}
      return await fetch(url, options)
    } catch (error) {
      console.log(error);
    }
  }
}

export default FetchService
