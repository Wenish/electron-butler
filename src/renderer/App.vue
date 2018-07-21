<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-butler'
  }
</script>

<style>
  body{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfe4f7+0,e5f0f9+100 */
    background: #cfe4f7; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #cfe4f7 0%, #e5f0f9 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #cfe4f7 0%,#e5f0f9 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #cfe4f7 0%,#e5f0f9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfe4f7', endColorstr='#e5f0f9',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */}
</style>
