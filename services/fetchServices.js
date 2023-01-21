import Api from '~/api/Api.js'
const base = 'v1'

class FetchServices {
  async GetFetch({ request }) {
    // const res = await Api.doGet(`${base}/categories/1/products?offset=0&limit=10 `, request)

    console.log(request, 'reqiest')
    let res='';
      if(request.select === null || request.select === ''){
        res = await Api.doGet(`${base}/products?offset=0&limit=10 `, request)
      }else {
        console.log('dijalankan')

        res = await Api.doGet(`${base}/categories/${request.select}/products?offset=0&limit=10 `, request)
      }

    console.debug('GET FETCH', res)
    return res
  }

  async GetCategory({ request }) {
    const res = await Api.doGet(`${base}/categories
    `, request)
    console.debug('GET FETCH', res)
    return res
  }

  async GetProductById({ request }) {
    console.log(request, "requestan")
    const res = await Api.doGet(`${base}/products/`+request.id)
    console.debug('Get User ', res)
    return res
  }
}

export default new FetchServices()
