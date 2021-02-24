<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item router-link="/memories/1">Item 1</ion-item>
      <ion-item>Item 2</ion-item>
      <ion-item>Item 3</ion-item>
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
  IonButton,
} from "@ionic/vue";
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
    IonButton,
  },
};
</script>