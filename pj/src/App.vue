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

<style>
  .sidebar-container {
    width:340px;
    height: 100%;
    background-color:#fffffa;
    float: left;
    overflow-y: scroll;
  }

  .main-container {
    margin-left:350px;
    height: 100%;
  }
</style>>