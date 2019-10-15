<template>
  <span>
    <!-- <v-container fluid :class="citaTechMainContainerClass">
      <cita-logo-bar></cita-logo-bar>
    </v-container>-->
    <!-- <v-container fluid :class="[citaTechMainContainerClass, citaTechNavigationContainerClass]">
      <cita-navigation-bar></cita-navigation-bar>
    </v-container>-->
    <v-parallax src="/img/home_background.png" height="400">
      <v-container fluid :class="[citaTechMainContainerClass, citaPageBackgroundClass]">
        <cita-tech-page-background
          imgSrc="img/home_background.png"
          descriptionTitle="Equipos de Hidrografía"
          descriptionContent="Contamos con equipos como ADCP River Ray, GPS, Monohaz, Multihaz, etc.
        para el análisis hidrológico de ríos"
        ></cita-tech-page-background>
      </v-container>
    </v-parallax>
    <v-container fluid :class="[citaTechMainContainerClass, citaPageDescriptionClass]">
      <cita-tech-page-description></cita-tech-page-description>
    </v-container>
    <v-container
      fluid
      :class="[
        citaTechMainContainerClass,
        citaTechFeaturedEquipmentContainerClass
      ]"
    >
      <cita-tech-featured-equipment></cita-tech-featured-equipment>
    </v-container>
    <!-- <v-container fluid :class="[citaTechMainContainerClass, citaTechFooterContainerClass]">
      <cita-tech-footer></cita-tech-footer>
    </v-container>-->
  </span>
</template>

<script>
import CitaLogoBar from "@/js/components/CitaLogoBar";
import CitaNavigationBar from "@/js/components/CitaNavigationBar";
import CitaTechPageDescription from "@/js/components/CitaTechPageDescription";
import CitaTechPageBackground from "@/js/components/CitaTechPageBackground";
import CitaTechFeaturedEquipment from "@/js/components/CitaTechFeaturedEquipment";
import CitaTechFooter from "@/js/components/CitaTechFooter";

export default {
  name: "CitaTechmainContainer",
  computed: {
    citaTechMainContainerClass() {
      return "citaTechMainContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechNavigationContainerClass() {
      return "citaTechNavigationContainer" + this.$vuetify.breakpoint.name;
    },
    citaPageBackgroundClass() {
      return "citaPageBackground" + this.$vuetify.breakpoint.name;
    },
    citaPageDescriptionClass() {
      return "citaPageDescription" + this.$vuetify.breakpoint.name;
    },
    citaTechFeaturedEquipmentContainerClass() {
      return (
        "citaTechFeaturedEquipmentContainer" + this.$vuetify.breakpoint.name
      );
    },
    citaTechFooterContainerClass() {
      return "citaTechFooterContainer" + this.$vuetify.breakpoint.name;
    }
  },
  components: {
    CitaLogoBar,
    CitaNavigationBar,
    CitaTechPageDescription,
    CitaTechPageBackground,
    CitaTechFeaturedEquipment,
    CitaTechFooter
  }
};
</script>

<style>
.citaTechMainContainerlg {
  padding-top: 25px !important;
  padding-bottom: 25px !important;
  padding-left: 200px !important;
  padding-right: 0px !important;
  background-color: white;
}
.citaTechMainContainerxs {
  padding-bottom: 20px !important;
  padding-left: 20px !important;
  padding-right: 0px !important;
  background-color: transparent;
}
.citaTechNavigationContainerlg {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-right: 200px !important;
  background-color: #424040;
}
.citaTechFeaturedEquipmentContainerlg {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-right: 200px !important;
  background-color: #f8f8f8;
}
.citaTechFooterContainerlg {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  padding-right: 200px !important;
  background-color: #dddddd;
}
.citaPageBackgroundlg {
  margin-top: 100px !important;
  background-color: transparent;
}
.citaPageDescriptionlg {
  margin-top: 15px !important;
  background-color: white;
}
.v-parallax__content {
  padding: 0px !important;
}
</style>
