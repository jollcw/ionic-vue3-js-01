<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
  <!-- <ion-header>
      <ion-toolbar>
        <ion-title> Memories Page </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
     
    </ion-content> -->
</template>
<script>
import {
  //   IonPage,
  //   IonHeader,
  //   IonToolbar,
  //   IonTitle,
  //   IonContent,
  IonList,
  IonItem,
  IonImg,
  IonThumbnail,
  IonLabel,
  // IonButton,
} from "@ionic/vue";
import {useStore} from 'vuex'
export default {
  // props: ["pageTitle"],
  components: {
    // IonPage,
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    // IonButton,
  },
  setup() {
    const store = useStore()
    // const memories = store.memories
    const memories = store.state.memories
  return {memories}
  }
};
</script>