<template>
  <v-container
    fluid
    class="text-center nav-bar-container px-md-0 py-md-2 px-lg-0 py-lg-2 px-xl-0 py-xl-2"
  >
    <v-layout>
      <v-flex>
        <v-btn v-on:click="goToHomeView" class="text-none white--text body-2" text>Home</v-btn>
      </v-flex>
      <v-flex>
        <v-btn v-on:click="goToAreasView" class="text-none white--text body-2" text>Áreas</v-btn>
      </v-flex>
      <v-flex>
        <v-btn v-on:click="goToEquiposView" class="text-none white--text body-2" text>Equipos</v-btn>
      </v-flex>
      <v-flex>
        <v-btn
          v-on:click="goToDevelopmentsView"
          class="text-none white--text body-2"
          text
        >Desarrollos</v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="text-none white--text body-2" text>Nosotros</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Router from "@/js/router";

export default {
  name: "CitaNavigationBar",
  methods: {
    goToHomeView: function() {
      Router.push({ path: "/" });
    },
    goToAreasView: function() {
      Router.push({ path: "/areas" });
    },
    goToEquiposView: function() {
      Router.push({ path: "/equipos" });
    },
    goToDevelopmentsView: function() {
      Router.push({ path: "/desarrollos" });
    }
  }
};
</script>

<style scoped>
.nav-bar-container {
  background-color: #424040;
}
</style>
