import $store from '../store'

export default {
  updateTotalAmount: ()=>{
    const items = $store.state.items
    let totalAmount = 0;

    items.forEach((element) => {
      totalAmount += parseFloat(element.amount)
    })

    $store.commit('updateTotalAmount', totalAmount)
  },
  calc: ()=>{
    //console.log('calulate run!')

    let items = $store.state.items
    let resultGrandTotal = 0
    //let resultTotalAmount = 0
    const discountFromGrab = $store.state.discountFromGrab
    const deliveryFeeFromGrab = $store.state.deliveryFeeFromGrab
    const totalAmount = $store.state.totalAmount

    items.forEach((element) => {

      element.deliveryFee = (deliveryFeeFromGrab / items.length)
      element.discount = (discountFromGrab * element.amount / totalAmount)
      element.total = (element.amount - (discountFromGrab * element.amount / totalAmount) + (deliveryFeeFromGrab / items.length))

      resultGrandTotal += parseFloat(element.total)
      //resultTotalAmount += parseFloat(element.amount)

    })

    $store.commit('updateItemsList', items)
    $store.commit('updateGrandTotal', resultGrandTotal)
  }
}
