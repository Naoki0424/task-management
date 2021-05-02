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

<style>
  .list {
    margin: 0 5px auto;
    position: relative;
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    min-width: 290px;
    width: 290px;
    background-color: #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    border: solid #ddd 1px;
    color: gray;
    vertical-align: top;
  }
  
  .list-header {
    width: 290px;
    display: inline-flex;
    justify-content: space-between;
  }
  
  .list-title {
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
  }
  
  .list-total {
    color: rgb(0, 140, 255);
    padding: 15px;
  }
  
  .delete-list {
    position: absolute;
    top: 6px;
    right: 14px;
    font-size: 28px;
  }
  
  .delete-list:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>