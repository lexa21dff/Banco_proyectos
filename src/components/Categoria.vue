<template>
  <div>
    <b-dropdown text="Seleccionar opciones">
      <b-form-checkbox-group v-model="selectedOptions" v-for="item in options" :key="item.id" >
        <b-form-checkbox  :value="item.url">
          {{ item.nombre }}
        </b-form-checkbox>
      </b-form-checkbox-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="selectOptions">Seleccionar</b-dropdown-item>
  </b-dropdown>
  <div class="mt-3">Selected: <strong>{{selectedOptions}}</strong></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedOptions: [],
      options: []
    }
  },
  mounted() {
    this.fetchOptions();
  },
  methods: {
    fetchOptions() {
      axios.get('http://127.0.0.1:8000/api/categoria/')
        .then(response => {
          this.options = response.data
        })
        .catch(error => {
          console.log(error);
        });
    },
    selectOptions() {
      this.$emit('select-options', this.selectedOptions);
      this.selectedOptions = [];
    }
  }
}
</script>

