<template>
  <div>
    <v-card class="mb-5">
      <v-card-title>
        <v-icon class="mr-2">
          mdi-information
        </v-icon>
        ข้อมูลจาก Grab
      </v-card-title>
              
      <v-card-actions>
        <v-container fluid>
          <v-text-field
            label="Discount From Grab"        
            v-model="discountFromGrab"
            outlined
            :rules="[rules.required, rules.isNumber]"
            @keyup="updateDiscount()"
          ></v-text-field>
          <v-text-field
            label="Delivery Fee From Grab"
            v-model="deliveryFeeFromGrab"
            outlined
            :rules="[rules.required, rules.isNumber]"
            @keyup="updateDeliveryFee()"
          ></v-text-field>
        </v-container>
      </v-card-actions> 
    </v-card>
  </div>
</template>

<script>
import $store from '../store'
import calcFunc from '../plugins/calculate'
import validate from '../plugins/validate-rules'

export default {
  data() {
    return {
      items: $store.state.items,
      discountFromGrab: '',
      deliveryFeeFromGrab: '',
      rules: validate.rules
    }
  },
  methods: {
    updateDiscount() {
      $store.commit('setDiscountFromGrab', this.discountFromGrab)
      calcFunc.updateTotalAmount()
      calcFunc.calc()
    },
    updateDeliveryFee(){
      $store.commit('setDeliveryFeeFromGrab', this.deliveryFeeFromGrab)
      calcFunc.updateTotalAmount()
      calcFunc.calc()
    }
  }
}
</script>