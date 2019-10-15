<template>
  <span>
    <!-- <v-container fluid :class="[citaTechMainContainerClass]">
      <cita-logo-bar></cita-logo-bar>
    </v-container>-->
    <!-- <v-container fluid :class="[citaTechMainContainerClass, citaTechNavigationContainerClass]">
      <cita-navigation-bar></cita-navigation-bar>
    </v-container>-->
    <v-parallax src="/img/areas_background.png" height="400">
      <v-container fluid :class="[citaTechMainContainerClass, citaPageBackgroundClass]">
        <cita-tech-page-background
          imgSrc="img/areas_background.png"
          descriptionTitle="Equipos de Topografía"
          descriptionContent="Contamos con equipos como GPR, GPS, Estaciones totales, tripodes, niveles de ingeniero, etc. Para realizar levantamientos topograficos en todas las zonas"
        ></cita-tech-page-background>
      </v-container>
    </v-parallax>

    <v-container fluid :class="[citaTechMainContainerClass, citaTechAreasCarouselClass]">
      <v-layout>
        <div class="headline font-weight-regular mb-4 mt-8">Proyectos realizados con estos equipos</div>
      </v-layout>
      <v-layout>
        <cita-tech-areas-carousel :items="carouselItems"></cita-tech-areas-carousel>
      </v-layout>
    </v-container>
    <v-container
      fluid
      :class="[
        citaTechMainContainerClass,
        citaTechFeaturedEquipmentContainerClass
      ]"
    >
      <v-layout>
        <v-flex>
          <div
            class="headline font-weight-regular mb-8"
            style="margin-top: 60px"
          >Equipos de topografía</div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-row>
          <v-col cols="3" v-for="equipment in equipments" :key="equipment.equipmentID">
            <cita-tech-equipment-card
              :name="equipment.equipmentName"
              :img-src="equipment.equipmentImgSrc"
              :type="equipment.equipmentType"
              :description="equipment.equipmentDescription"
            ></cita-tech-equipment-card>
          </v-col>
        </v-row>
      </v-layout>
      <v-layout align-content-center justify-center class="mb-8">
        <v-btn text class="text-none my-12 moreEquipmentButton">Ver más equipos CITA</v-btn>
      </v-layout>
    </v-container>
    <!-- <v-container fluid :class="[citaTechMainContainerClass, citaTechFooterContainerClass]">
      <cita-tech-footer></cita-tech-footer>
    </v-container>-->
  </span>
</template>

<script>
import CitaLogoBar from "@/js/components/CitaLogoBar";
import CitaNavigationBar from "@/js/components/CitaNavigationBar";
import CitaTechAreasCarousel from "@/js/components/CitaTechAreasCarousel";
import CitaTechPageBackground from "@/js/components/CitaTechPageBackground";
import CitaTechEquipmentCard from "@/js/components/CitaTechEquipmentCard";
import CitaTechFooter from "@/js/components/CitaTechFooter";

export default {
  name: "areas",
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
    citaTechFooterContainerClass() {
      return "citaTechFooterContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechFeaturedEquipmentContainerClass() {
      return (
        "citaTechFeaturedEquipmentContainer" + this.$vuetify.breakpoint.name
      );
    },
    citaTechAreasCarouselClass() {
      return "citaTechAreasCarousel" + this.$vuetify.breakpoint.name;
    }
  },
  data() {
    return {
      equipments: [
        {
          equipmentID: 1,
          equipmentName: "Nivel de ingeniero",
          equipmentImgSrc: "nivel_ingeniero.png",
          equipmentType: "topography",
          equipmentDescription:
            "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
        },
        {
          equipmentID: 2,
          equipmentName: "Laser Scanner",
          equipmentImgSrc: "laser_scanner.png",
          equipmentType: "topography",
          equipmentDescription:
            "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
        },
        {
          equipmentID: 3,
          equipmentName: "Estación Total",
          equipmentImgSrc: "estacion_total.png",
          equipmentType: "topography",
          equipmentDescription:
            "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
        },
        {
          equipmentID: 4,
          equipmentName: "Nivel de ingeniero",
          equipmentImgSrc: "nivel_ingeniero.png",
          equipmentType: "topography",
          equipmentDescription:
            "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
        }
      ],
      carouselItems: [
        {
          id: 1,
          imgSrc: "areas_carousel_img_1.png",
          title: "Levantamiento 3D en Tipon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
          equipments: [
            { id: 1, name: "Nivel de ingeniero" },
            { id: 2, name: "Laser Scanner" },
            { id: 3, name: "Estacion Total" }
          ]
        },
        {
          id: 2,
          imgSrc: "areas_carousel_img_2.png",
          title: "Levantamiento 3D en Tipon 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
          equipments: [
            { id: 1, name: "Nivel de ingeniero" },
            { id: 2, name: "Laser Scanner" },
            { id: 3, name: "Estacion Total" }
          ]
        },
        {
          id: 3,
          imgSrc: "areas_carousel_img_3.png",
          title: "Levantamiento 3D en Tipon 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
          equipments: [
            { id: 1, name: "Nivel de ingeniero" },
            { id: 2, name: "Laser Scanner" },
            { id: 3, name: "Estacion Total" }
          ]
        }
      ]
    };
  },
  components: {
    CitaLogoBar,
    CitaNavigationBar,
    CitaTechPageBackground,
    CitaTechAreasCarousel,
    CitaTechEquipmentCard,
    CitaTechFooter
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
.moreEquipmentButton {
  color: white !important;
  background-color: #424040;
}
.citaTechAreasCarousellg {
  padding-top: 0px !important;
  padding-bottom: 20px !important;
  padding-right: 130px !important;
  margin-top: 15px !important;
  background-color: white;
}
</style>
