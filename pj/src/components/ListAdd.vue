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
      const classList = ['add-list']
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

<style lang="scss" scoped>
  @import '@/assets/css/commonStylesScss';
  @import '@/assets/css/commonStylesList';
  @import '@/assets/css/commonMixinTaskBoard';
  
  .text-input {
    @include textInput();
  }

  .add-list {
    margin: 0 5px auto;
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    min-width: $list-width + $padding + $padding;
    width: $list-width + $padding + $padding;
  }

  .add-button {
    @include addButton();
  }
</style>