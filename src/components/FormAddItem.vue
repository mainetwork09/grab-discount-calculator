<template>
  <div>
    <v-card class="mb-5">
            <v-card-title>
              <v-icon class="mr-2">
                mdi-lead-pencil
                </v-icon>  
              เพิ่มรายการ
            </v-card-title>
            <v-card-actions>
              <v-form ref="form" @submit.prevent="btnAddItem" v-model="form">
                <v-container fluid grid-list-md>
                  <v-layout wrap>
                    <v-flex xs4>
                      <v-text-field
                        label="Name"
                        outlined
                        v-model="member_name"
                        :rules="[rules.required]"
                        ref="input_name"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                                  label="Amount"
                                  outlined
                                  v-model="amount"
                                  :rules="[rules.required, rules.isNumber]"
                      ></v-text-field>
                    </v-flex>
                  
                    <v-flex xs4>
                      <v-btn type="submit" color="primary" :disabled="!form" :loading="btnLoading" large>
                        <v-icon class="mr-2">
                          mdi-plus-circle
                        </v-icon>
                        เพิ่ม
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
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
      name: "FormAddItem",
      member_name: "",
      form: false,
      amount: "",
      btnLoading: false,
      rules: validate.rules
    }
  },

  methods: {
    btnAddItem(){

      this.btnLoading = false

      const data = {
        name: this.member_name,
        amount: parseFloat( this.amount ),
        created: Date.now()
      }

      $store.commit('addItemToList',data)
      calcFunc.updateTotalAmount()
      calcFunc.calc()

      this.$refs.form.reset()
      this.$refs.input_name.focus()

    }
  }
}
</script>

<style scope>
.v-form {
  width: 100%;
}

</style>