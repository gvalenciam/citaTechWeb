<template>
  <v-app>
    <!-- <app-navigation></app-navigation> -->
    <v-content transition="slide-x-transition">
      <v-container fluid :class="citaTechMainContainerClass">
        <cita-logo-bar></cita-logo-bar>
      </v-container>
      <v-container fluid :class="[citaTechMainContainerClass, citaTechNavigationContainerClass]">
        <cita-navigation-bar></cita-navigation-bar>
      </v-container>
      <router-view></router-view>
      <v-container fluid :class="[citaTechMainContainerClass, citaTechFooterContainerClass]">
        <cita-tech-footer></cita-tech-footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import AppNavigation from '@/components/AppNavigation';
import CitaLogoBar from "@/js/components/CitaLogoBar";
import CitaNavigationBar from "@/js/components/CitaNavigationBar";
import Areas from "@/js/views/Areas";
import CitaTechFooter from "@/js/components/CitaTechFooter";

export default {
  name: "App",
  components: {
    CitaLogoBar,
    CitaNavigationBar,
    Areas,
    CitaTechFooter
    // AppNavigation
  },
  computed: {
    citaTechMainContainerClass() {
      return "citaTechMainContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechFooterContainerClass() {
      return "citaTechFooterContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechNavigationContainerClass() {
      return "citaTechNavigationContainer" + this.$vuetify.breakpoint.name;
    }
  }
};
</script>

<style scoped>
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
.citaTechFooterContainerlg {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  padding-right: 200px !important;
  background-color: #dddddd;
}
.citaTechNavigationContainerlg {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-right: 200px !important;
  background-color: #424040;
}
</style>
