<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
           type="text"
           class="text-input"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
    />
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      body: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['add-card']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.bodyExists) {
        classList.push('addable')
      }
      return classList
    },
    bodyExists() {
      return this.body.length > 0
    }
  },
  methods: {
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    },
    startEditing: function() {
      this.isEditing = true
    },
    finishEditing: function() {
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

  .add-card {
    // margin: 0 0px auto;
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    // min-width: 290px;
    // width: 290px;
  }

  .add-button {
    @include addButton();
  }
</style>