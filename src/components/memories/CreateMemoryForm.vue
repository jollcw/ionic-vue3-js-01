<template>
  <forn class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription" />
      </ion-item>
      <!-- <ion-button type="submit" expand="block">Save</ion-button> -->
      <ion-button @click="submitForm" expand="block">Save</ion-button>
    </ion-list>
  </forn>
  {{ enteredTitle }}
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  setup(props, context) {
    const enteredTitle = ref("");
    const enteredImageUrl = ref("");
    const enteredDescription = ref("");

    const submitForm = () => {
      // console.log("submitForm");
      const memoryData = {
        title: enteredTitle.value,
        imageUrl: enteredImageUrl.value,
        description: enteredDescription.value,
      };

      context.emit("save-memory", memoryData);
    };

    return { enteredTitle, enteredImageUrl, enteredDescription, submitForm };
  },
};
</script>


<style>
</style>