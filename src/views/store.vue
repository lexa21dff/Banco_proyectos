<template>
    <div>
      <p>Nombre de usuario: {{ username }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      username() {
        return this.$store.state.username
      }
    }
  }
  </script>
  
