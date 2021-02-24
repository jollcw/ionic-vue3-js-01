<template>
  <base-layout page-title="All Memories">
    <ion-button routerLink="/add">click</ion-button>
    <ion-button routerLink="/memories/1">click</ion-button>
    <ion-button router-link="/add">Go to detail</ion-button>
    <ion-button routerLink="/DetailsPage">Log In </ion-button>
    <ion-list>
      <ion-item router-link="/memories/1">1Item</ion-item>
      <ion-item>item</ion-item>
      <ion-item>Item0</ion-item>
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