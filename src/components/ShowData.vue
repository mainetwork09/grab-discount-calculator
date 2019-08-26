<template>
  <div>
    <v-card class="mb-5">
      <v-card-title>
              <v-icon class="mr-2">
                mdi-file
                </v-icon>  
              รายการ
            </v-card-title>
            <v-simple-table>
              <thead>
                <tr>
                  <th>ชื่อ</th>
                  <th>ค่าส่ง</th>
                  <th>ส่วนลด</th>
                  <th>ราคาเต็ม</th>
                  <th>ต้องจ่าย</th>
                  <th class="text-center" width="90px">ลบ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.time">
                  <td>{{ item.name }}</td>
                  <td>{{ item.deliveryFee | NumberFormat }}</td>
                  <td>{{ item.discount | NumberFormat }}</td>
                  <td>{{ item.amount | NumberFormat}}</td>
                  <td>{{ item.total | NumberFormat }}</td>
                  <td class="text-center">
                    <v-btn text icon small color="red" @click.stop="btnDelete(item)">
                      <v-icon class="rotate">
                        mdi-account-minus
                      </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <th>{{ TotalAmountCalc | NumberFormat }}</th>
                  <th>{{ grandTotalCalc | NumberFormat }}</th>
                </tr>
              </tfoot>
            </v-simple-table>
            <v-card-text class="text-right">
              ทั้งหมด <b>{{ items.length }}</b> รายการ<br />
              ราคารวมทั้งหมด <b>{{ TotalAmountCalc | NumberFormat }}</b> บาท <br />
              ราคาหลังคิดส่วนลด <b>{{ grandTotalCalc | NumberFormat }}</b> บาท<br />
            </v-card-text>
          </v-card>
  </div>
</template>

<script>
import $store from '../store'
import calcFunc from '../plugins/calculate'
var numeral = require("numeral");

export default {
  data() {
    return {
      items: $store.state.items,
      totalAmount: 0,
      grandTotal: 0
    }
  },
  filters: {
    NumberFormat(value){
      return numeral(value).format('0,0.00');
    }
  },
  computed: {
    TotalAmountCalc: function(){
      let items = $store.state.items
      let calcTotalAmount = 0

      items.forEach((element)=>{
        calcTotalAmount += parseFloat( element.amount )
      })

      return calcTotalAmount
    },
    grandTotalCalc: function(){
      let items = $store.state.items
      let resultGrandTotal = 0
      const discountFromGrab = $store.state.discountFromGrab
      const deliveryFeeFromGrab = $store.state.deliveryFeeFromGrab

      items.forEach((element)=>{
        element.total = ( element.amount - (discountFromGrab *  element.amount / this.TotalAmountCalc) + (deliveryFeeFromGrab / items.length) )
        resultGrandTotal += parseFloat( element.total )
      })

      return resultGrandTotal
    }
  },
  watch: {
    items(newValue){
      this.items = newValue
    }
  },
  methods:{
    btnDelete(item){
      const newItems = this.items.filter((element)=>{
        return element != item
      })
      this.items = newItems
      $store.commit('updateItemsList', newItems)
      calcFunc.updateTotalAmount()
      calcFunc.calc()
    }
  }
}
</script>

<style scope>
.rotate {
  transform: rotateY(180deg)
}
</style>