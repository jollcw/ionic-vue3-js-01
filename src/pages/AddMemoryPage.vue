<template>
  <base-layout page-title="Add Memory" page-default-back-link="/memories">
    <h2>Memory add</h2>
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/memories/CreateMemoryForm.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    CreateMemoryForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const saveMemory = (memory) => {
      store.dispatch("addMemory", memory);
      router.replace("/memories");
    };

    return { saveMemory };
  },
};
</script>

<style>
</style>