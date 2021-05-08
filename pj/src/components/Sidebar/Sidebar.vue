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
              :itemId="item.id"
              :path="item.path"
      />
      </div>
  </div>
</template>

<script>
import SidebarItem from '@/components/Sidebar/SidebarItem.vue'
import * as Enum from '@/const/Enum'

export default {
  data: function() {
    console.log(Enum.MenuEnum.getAllItem());
    return {
      items: Enum.MenuEnum.getAllItem()
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
  $sidebar-header-height: 150px;
  // クローズボタンの高さ
  $sidebar-closebuttun-area-height: 30px;
  // クローズボタンの幅
  $sidebar-closebuttun-area-width: 30px;
  // タイトルの高さ
  $sidebar-title-area-height: 120px;
  // メニューの高さ
  $sidebar-contents-height: 700px;

  #sidebar {
    .sidebar-header{
      position: fixed;
      width: $sidebar-width;
      height: $sidebar-header-height;
      border-bottom: medium solid $color-gray;
      background-color: $color-white;
    }
    .sidebar-closebuttun-area{
      height: $sidebar-closebuttun-area-height;
    }
    .sidebar-closebuttun{
      margin: 0 0 0 auto;
      height: $sidebar-closebuttun-area-height;
      width: $sidebar-closebuttun-area-width;
    }
    .sidebar-title-area{
      margin-top: $margin-10px;
      height: $sidebar-title-area-height - $margin-10px;
    }
    .sidebar-title{
      font-size: 25px;
      height: $sidebar-title-area-height - $margin-10px;
    }
    .sidebar-contents {
      margin-top: $sidebar-header-height + $margin-10px;
      height: $sidebar-contents-height;
    }
  }
</style>