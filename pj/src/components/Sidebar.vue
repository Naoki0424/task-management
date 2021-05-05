<template>
  <div id="sidebar">
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
        { name: 'タスクボード' },
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

<style lang="scss">  
  @import '@/assets/css/commonStylesScss';
  // サイドバーの幅
  $sidebar-width: $sidebar-width - $scroll-width;
  // サイドバーのヘッダーの幅
  $sidebar-header-heght: 150px;
  // クローズボタンの高さ
  $sidebar-closebuttun-area-heght: 30px;
  // クローズボタンの幅
  $sidebar-closebuttun-area-width: 30px;
  // タイトルの高さ
  $sidebar-title-area-heght: 120px;

  #sidebar {
    .sidebar-header{
      position: fixed;
      width: $sidebar-width;
      height: $sidebar-header-heght;
      border-bottom: medium solid $color-gray;
    }
    .sidebar-closebuttun-area{
      height: $sidebar-closebuttun-area-heght;
    }
    .sidebar-closebuttun{
      margin: 0 0 0 auto;
      height: $sidebar-closebuttun-area-heght;
      width: $sidebar-closebuttun-area-width;
    }
    .sidebar-title-area{
      margin-top: $margin-10px;
      height: $sidebar-title-area-heght - $margin-10px;
    }
    .sidebar-title{
      font-size: 25px;
      height: $sidebar-title-area-heght - $margin-10px;
    }
    .sidebar-contents {
      margin-top: $sidebar-header-heght + $margin-10px;
    }
  }
</style>