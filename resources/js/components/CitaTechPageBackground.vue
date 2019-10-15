<template>
  <v-layout>
    <v-flex>
      <div class="display-1 my-5">{{this.descriptionTitle}}</div>
      <div class="title my-2" style="max-width: 30vw">{{this.descriptionContent}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CitaTechPageBackground",
  props: ["imgSrc", "descriptionTitle", "descriptionContent"],
  computed: {
    backgroundImg() {
      return "background-image: url('require('" + this.imgSrc + "')')";
    }
  }
};
</script>

<style scoped></style>
