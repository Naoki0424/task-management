<template>
  <div>
      <div class="sidebar-item-title">{{ itemTitle }}</div>
  </div>
</template>

<script>
export default {
    props: {
        itemTitle: {
            type: String,
            required: true
        },     
    }
}
</script>

<style>
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
</style>