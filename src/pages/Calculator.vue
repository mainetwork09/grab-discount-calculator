<template>
  <div class="order">
    <v-container>
     
      <v-flex class="pb-5">
        <h1>Calculator</h1>
        <div>Grab Food Discount Calculator</div>
      </v-flex>

      <v-container fluid grid-list-md class="pa-0">
        <v-layout row>
          <v-flex md4>
            <DataFromGrab />
          </v-flex>
          <v-flex md8>
            <FormAddItem />
            <ShowData />
          </v-flex>
        </v-layout>
      </v-container>

    </v-container>
  </div>
</template>

<script>
import ShowData from '../components/ShowData'
import FormAddItem from '../components/FormAddItem'
import DataFromGrab from '../components/DataFromGrab'

export default {
  components: {
    ShowData, FormAddItem, DataFromGrab
  }
}
</script>