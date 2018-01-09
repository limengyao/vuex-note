<template>
  <div id="app">
    <toolbar ></toolbar>
    <notelist></notelist>
    <editnote></editnote>
  </div>
</template>

<script>

import editnote from '@/components/editNode'
import notelist from '@/components/noteList'
import toolbar from '@/components/toolBar'

export default {
  name: 'app',
  components: {
    editnote,
    notelist,
    toolbar
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: row;
  height: 100%;
}

*{
  margin: 0;
  padding: 0;
  border: 0;
}


</style>
