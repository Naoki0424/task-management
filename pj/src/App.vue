<template>
  <div id="app">
    <sidebar class="sidebar"/>
    <board class="msin"/>
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