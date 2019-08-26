import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    add_item_click: false,
    calcGrandTotal: 0,
    calcTotalAmount: 0,
    discountFromGrab: 0,
    deliveryFeeFromGrab: 0,
    totalAmount: 0
  },
  mutations: {
    addItemToList(state, item) {
      state.items.push(item)
    },
    updateItemsList(state, items){
      state.items = items
    },
    setDiscountFromGrab(state, val) {
      state.discountFromGrab = val
    },
    setDeliveryFeeFromGrab(state, val) {
      state.deliveryFeeFromGrab = val
    },
    updateGrandTotal(state, val){
      state.calcGrandTotal = val
    },
    updateTotalAmount(state, val) {
      state.totalAmount = val
    }
  }
})