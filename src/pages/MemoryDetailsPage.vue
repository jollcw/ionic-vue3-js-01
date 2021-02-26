<template>
  <base-layout :page-title="memory ? memory.title : 'Loading ...'" page-default-back-link="/memories">
    <h2 v-if="!memory">Could not find memory for the given id!!</h2>
    <h2 v-else>details page</h2>
    {{memory}}
  </base-layout>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const route = useRoute()
    console.log(route.params.id);

    const store = useStore()

      // const memory = store.state.memory
      const memory = computed(() => {
        // return store.getters.memory
        // return store.getters.memoryFind('a')
        return store.getters.memoryFind(route.params.id)
        })

    onMounted(async() => {
      // await store.dispatch('filtraMemoryId', route.params.id )
    })

    return {memory}
  }
};
</script>