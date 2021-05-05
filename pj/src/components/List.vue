<template>
  <div class="list">
    <div class="list-header">
      <p class="list-title">{{ title }}</p>
      <p class="list-total">total: {{ totalCardInList }}</p>
      <div class="delete-list" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
      />
      <card-add :listIndex="listIndex"/>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardAdd from './CardAdd'
import Card from './Card'

export default {
  components: {
    draggable,
    CardAdd,
    Card
  },
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
  },
  computed: {
    totalCardInList() {
      return this.cards.length
    }
  },
  methods: {
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')){
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/commonStylesScss';
  @import '@/assets/css/commonStylesList';

  .list {
    margin: 0 $list-space auto;
    position: relative;
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    min-width: $list-width;
    width: $list-width;
    background-color: $color-gray;
    border-radius: 8px;
    padding: $padding;
    vertical-align: top;
  }
  
  .list-header {
    width: $list-width;
    display: inline-flex;
    justify-content: space-between;
  }
  
  .list-title {
    font-size: 20px;
    font-weight: bold;
    padding: $padding;
  }
  
  .list-total {
    color: $color-blue;
    padding: $padding;
  }
  
  .delete-list {
    position: absolute;
    top: 6px;
    right: 14px;
    font-size: 28px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  

</style>