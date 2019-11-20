<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  %button {
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 30px;
  }
  .button-green {
    @extend %button;
    border: 1px solid #3b8070;
    color: #3b8070;
  }
  .button-green:hover {
    color: #fff;
    background-color: #3b8070;
    text-decoration: none;
  }
  .button-grey {
    @extend %button;
    border: 1px solid #35495e;
    color: #35495e;
    margin-left: 15px;
  }
  .button-grey:hover {
    color: #fff;
    background-color: #35495e;
    text-decoration: none;
  }
  // Primary button
  .btn-outline-primary {
    color: #293462;
    border-color: #293462;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-primary.dropdown-toggle,
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #f7be16;
    border-color: #f7be16;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-primary.dropdown-toggle:focus,
  .btn-outline-primary:focus,
  .btn-outline-primary.focus  {
    box-shadow: 0 0 0 0.2rem rgba(247, 225, 22, 0.5);
  }
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