<template>
    <!-- <base-layout page-title="Detail page"> -->
    <ion-page>
    <h2>Detail page</h2>
    <ion-button router-link="/home">Go to home</ion-button>
    <ion-button router-link="/add">Go to add</ion-button>
    <ion-button routerLink="/contact">Go to contact</ion-button>
  <!-- </base-layout> -->
  </ion-page>
</template>
<script>
import {IonPage, IonButton} from '@ionic/vue'
export default {
  components: {
    IonPage,
    IonButton
  }
    
}
</script>
