<template>
  <div>
      <div class="sidebar-header">
        <div class="sidebar-closebuttun-area">
          <div class="sidebar-closebuttun">⭐️</div>
        </div>
        <div class="sidebar-title-area">
          <div class="sidebar-title">チーム名A</div>
        </div>
      </div>
      <div class="sidebar-contents">
      <sidebar-item v-for="(item, index) in items"
              :key="index"
              :itemTitle="item.name"
      />
      </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  data: function() {
    return {
      items: [
        { name: 'スプリントプランニング' },
        { name: 'タスク管理' },
        { name: 'スプリントプロスペクティブ' },
        { name: 'マスタメンテ' },
      ]
    }
  },
  components: {
    SidebarItem
  },
}
</script>

<style>
  .sidebar-closebuttun-area{
    height: 30px;
  }
  .sidebar-closebuttun{
    margin: 0 0 0 auto;
    height: 30px;
    width: 30px;
  }
  .sidebar-title-area{
    margin-top: 10px;
    height: 110px;
  }
  .sidebar-title{
    font-size: 25px;
    height: 110px;
  }
  .sidebar-header{
    position: fixed;
    width: 325px;
    height: 150px;
    background-color:#fffffa;
    border-bottom: medium solid #dddadd;
  }
  .sidebar-contents {
    margin-top: 160px;
  }
</style>