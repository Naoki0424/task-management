<template>
  <div id="app">
    <sidebar class="sidebar-container"/>
    <!-- <board class="main-container"/> -->
    <router-view class="main-container"/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue'

export default {
  name: 'app',
  components: {
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
    overflow-y: scroll;
    background-color: $color-white;
  }
</style>>