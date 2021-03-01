<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>
<script>
import MemoriesList from "../components/memories/MemoriesList.vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import { useStore } from "vuex";

export default {
  // props: ["pageTitle"],
  components: {
    MemoriesList,
    IonButton,
    IonIcon,
  },
  setup() {
    const store = useStore();
    // const memories = store.memories
    const memories = store.state.memories;
    // console.log(memories);
    return { memories, add };
  },
};
</script>