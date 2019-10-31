<template>
  <div>
    <v-container grid-list-md>
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
  </div>
</template>

<script>
import ShowData from "../components/ShowData";
import FormAddItem from "../components/FormAddItem";
import DataFromGrab from "../components/DataFromGrab";

export default {
  components: {
    ShowData,
    FormAddItem,
    DataFromGrab
  }
};
</script>