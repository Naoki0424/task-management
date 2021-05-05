<template>
  <div id="app">
    <sidebar class="sidebar-container"/>
    <board class="main-container"/>
  </div>
</template>

<script>
import Board from './components/Board.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Board,
    Sidebar
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/commonStylesScss';

  .sidebar-container {
    width: $sidebar-width;
    height: 100%;
    background-color: $color-white;
    float: left;
    overflow-y: scroll;
  }

  .main-container {
    margin-left: $sidebar-width + $margin-10px;
    height: 100%;
  }
</style>>