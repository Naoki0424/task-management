
<template>
  <div>
    <header>
      Assessment Board
    </header>
    <main>
    </main>
  </div>
</template>

<script>
</script>

<style lang="scss">
  @import '@/assets/css/commonMixin';

  header {
    @include header(); 
  }

  main {
    @include main(); 
  }

  .list-index {
    display: flex;
  }

  .info-line {
    margin: 10px;
    font-size: 20px;
  }
</style>