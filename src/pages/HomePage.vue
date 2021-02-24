<template>
  <!-- <base-layout page-title="Home"> -->
  <ion-page>
    <h2>Home</h2>
    <ion-button router-link="/detail">Go to detail</ion-button>
    <ion-button routerLink="/add">Go to add</ion-button>
    <ion-button routerLink="/contact">Go to contact</ion-button>
  </ion-page>
  <!-- </base-layout> -->
</template>
<script>
import { IonPage, IonButton } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonButton,
  },
};
</script>