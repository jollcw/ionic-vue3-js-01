<template>
  <!-- <base-layout page-title="Memories Details"> -->
  <ion-page>
    <h2>Add page</h2>
    <ion-button router-link="/home">Go to home</ion-button>
    <ion-button router-link="/detail">Go to detail</ion-button>
    <ion-button router-link="/contact">Go to contact</ion-button>
    <!-- </base-layout> -->
  </ion-page>
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
