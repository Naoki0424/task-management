<template>
  <div id="sidebar-item">
      <div class="sidebar-item-title" @click="toPage">{{ itemTitle }}</div>
  </div>
</template>

<script>
export default {
    props: {
        itemTitle: {
            type: String,
            required: true
        }, 
        itemId: {
            type: String,
            required: true
        },   
        path: {
            type: String,
            required: true
        },     
    },
    methods: {
        toPage() {
            this.$router.push(this.path);
        }
    }
}
</script>

<style lang="scss">
#sidebar-item {
    .sidebar-item-title{
        font-size: 20px;
        height: 50px;
        cursor: pointer;
        transition: color 0.3s;
        margin-left: 10px;
        margin-top: 10px;
    }

    .sidebar-item-title:hover {
        color: rgb(1, 215, 243);
        text-decoration: inherit;
    }
}
</style>