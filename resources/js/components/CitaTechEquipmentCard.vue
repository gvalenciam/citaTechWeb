<template>
  <v-card outlined tile class="mx-auto px-2" max-width="400">
    <v-img class="white--text mt-4 mb-12" contain height="200px" :src="'/img/' + filename"></v-img>

    <v-card-text class="mt-n12">
      <span class="body-1 black--text font-weight-condensed">{{ name }}</span>
      <br />
      <v-btn
        small
        rounded
        depressed
        class="caption text-none white--text my-5 drone-equipment"
        :style="equimentCardButtonStyle"
      >{{ equimentCardButtonText }}</v-btn>
      <p class="body-2 black--text equipmentDescription">{{ description }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="blue" class="text-none mt-n8">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CitaTechEquipmentCard",
  props: ["name", "imgSrc", "type", "description"],
  data() {
    return {
      filename: this.imgSrc
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    equimentCardButtonStyle() {
      switch (this.type) {
        case "drone":
          return "background-color: #ff7d97 !important";
        case "topography":
          return "background-color: #f3cb58 !important";
        case "hydrography":
          return "background-color: #3d72b0 !important";
        case "dCampo":
          return "background-color: #9c9a9f !important";
        case "dDrone":
          return "background-color: #9c9a9f !important";
        case "dRemoto":
          return "background-color: #9c9a9f !important";
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    equimentCardButtonText() {
      switch (this.type) {
        case "drone":
          return "Drone";
        case "topography":
          return "Topografía";
        case "hydrography":
          return "Hidrografía";
        case "dCampo":
          return "D.Campo";
        case "dDrone":
          return "D.Drone";
        case "dRemoto":
          return "D.Remoto";
      }
    }
  }
};
</script>

<style scoped>
.drone-equipment {
  padding: 8px !important;
}
.equipmentDescription {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
