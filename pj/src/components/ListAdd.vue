<template>
  <form :class="classList" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
           @focusin="startEditing"
           @focusout="finishEditing"
    >
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      // タイトル名
      title: '',
      // タイトル名にフォーカスが当たっているか否か
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    // 
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  }
}
</script>

<style>
  .add-list {
    margin: 0 10px auto;
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    min-width: 320px;
    width: 320px;
  }
</style>