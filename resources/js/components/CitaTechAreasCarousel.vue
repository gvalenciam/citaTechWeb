<template>
  <v-carousel light hide-delimiter-background :hide-delimiters="false" :show-arrows="false">
    <v-carousel-item v-for="project in projects" :key="project.id">
      <v-layout>
        <v-row>
          <v-col cols="6">
            <v-layout>
              <div class="title font-weight-regular mb-2 mt-4">{{ project.title }}</div>
            </v-layout>
            <v-layout>
              <div class="subtitle-2 font-weight-regular my-3">{{ project.description }}</div>
            </v-layout>
            <v-layout>
              <div class="subtitle-2 font-weight-regular mt-1 mb-3">Equipos utilizados:</div>
            </v-layout>
            <v-layout class="mt-3">
              <v-flex>
                <v-btn
                  text
                  dark
                  class="mr-4 px-3 font-weigth-regular white--text text-none topographyButtons"
                  v-for="usedEquipment in project.equipments"
                  :key="usedEquipment.name + usedEquipment.id"
                >{{ usedEquipment.name }}</v-btn>
              </v-flex>
            </v-layout>
          </v-col>
          <v-col cols="6">
            <v-img contain height="370" :src="'/img/' + project.imgSrc"></v-img>
          </v-col>
        </v-row>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CitaTechAreasCarousel",
  props: ["items"],
  data() {
    return {
      projects: this.items
    };
  }
};
</script>

<style scoped>
.topographyButtons {
  background-color: #f3cb58 !important;
  border-radius: 10px !important;
}
/* .carouselDescription {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
} */
</style>
