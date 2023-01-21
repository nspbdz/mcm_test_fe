import fetchServices from '~/services/fetchServices'
import { showFailedPopup,
  showSuccessPopup
 } from '@/helpers/Utils'

export const state = () => ({
  items: [],
  category: [],
  id: [],
  selected: '',
})

export const getters = {
  items: (state) => state.items,
  id: (state) => state.id,
  selected: (state) => state.selected,
  category: (state) => state.category,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ID(state, items) {
    state.id = items
  },
  SET_CATEGORY(state, items) {
    state.category = items
  },
  SET_SELECTED(state, items) {
    state.selected = items
  },
}

export const actions = {
  // async postCompleteLeads(context, payload) {
  //   console.log(payload, 'payloads')
  //   const id=payload.leads_id

  //   const data = new FormData
  //     data.append('leads_id', payload.leads_id)
  //     data.append('partner_name', payload.partner_name)
  //     data.append('partner_nik', payload.partner_nik)
  //     data.append('tenor', payload.tenor)
  //     data.append('partner_no_hp', payload.partner_no_hp)
  //     data.append('partner_birthday', payload.partner_birthday)
  //     data.append('installment', payload.installment)

  //     payload.file.forEach((value, index1) => {
  //       Object.entries(value).forEach(([key, value]) => {
  //         data.append(`tab[FotoUpload][${index1}][${key}]`, value)
  //       })
  //     })

  //   try {

  //     const res = await leadsServices.PostCompleteLeads(id,data)
  //     // const res = await leadsServices.PostCompleteLeads({ request })
  //     console.log(res, 'jalan')
  //     context.commit('SET_DATA', res.data)
  //     return res
  //   } catch (error) {
  //     showFailedPopup({ msg: error })
  //     throw error
  //   }
  // },

  async postLeads(context, payload) {
    console.log(payload, 'payloads')

    const data = new FormData()
    data.append('title', payload.title)
    data.append('price', payload.price)
    data.append('description', payload.description)
    payload.file.forEach((value, index1) => {
      Object.entries(value).forEach(([key, value]) => {
        data.append(`tab[FotoUpload][${index1}][${key}]`, value)
      })
    })

    console.log(data, 'data payloads')


    try {
      console.log("data")
      await showSuccessPopup({ msg: 'Success Add Product' })
      // dibawah adalah nanti ketika sudah tidak pakai fake data
      // const res = await leadsServices.PostLeads({ data })
      // console.log(res, 'jalan')
      // context.commit('SET_DATA', res.data)
      // return res
    } catch (error) {
      showFailedPopup({ msg: error })
      throw error
    }
  },

  async getCategory(context, payload) {
    try {
      const res = await fetchServices.GetCategory({})
      context.commit('SET_CATEGORY', res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async getSelected(context, payload) {
    console.log(payload.value, 'selected')
    try {
      await context.commit('SET_SELECTED', payload.value)
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async getFetch(context, payload) {
    let request = ''
    if (payload !== '') {
      request = {
        select: payload.select,
        categories: payload.categories,
      }
    }
    console.log(request, 'requestan')
    try {
      const res = await fetchServices.GetFetch({ request })
      context.commit('SET_ITEMS', res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
  async getProductById(context, payload) {
    console.log(payload.value)
    const request = {
      id: payload.value,
    }
    try {
      const res = await fetchServices.GetProductById({ request })
      context.commit('SET_ID', res)
      console.log(res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
}
