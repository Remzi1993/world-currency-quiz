<template>
  <div class="container" id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  #app { min-height: 90vh; }
}

</style>