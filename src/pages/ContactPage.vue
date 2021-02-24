<template>
  <base-layout page-title="Contact">
    <h2>contact</h2>
    <ion-button router-link="/home">Go to home</ion-button>
    <ion-button router-link="/detail">Go to detail</ion-button>
    <ion-button router-link="/add">Go to add</ion-button>
  </base-layout>
</template>

<script>
// import BaseLayout from '../components/base/BaseLayout.vue'
import { IonButton } from "@ionic/vue";
export default {
  components: { IonButton },
};
</script>

<style>
</style>