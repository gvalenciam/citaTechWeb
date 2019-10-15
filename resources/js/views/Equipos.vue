<template>
  <span>
    <v-parallax src="/img/equipment_background.png" height="400">
      <v-container fluid :class="[citaTechMainContainerClass, citaPageBackgroundClass]">
        <cita-tech-page-background
          imgSrc="img/equipment_background.png"
          descriptionTitle="Equipos de CITA"
          descriptionContent="A traves de diversos proyectos el CITA ha ido implementando diversos equipos a su inventario, los cuales pueden ser utilizados en nuevos proyectos"
        ></cita-tech-page-background>
      </v-container>
    </v-parallax>
    <v-container fluid :class="[citaTechMainContainerClass, searchBarContainerClass]">
      <div></div>
    </v-container>
    <v-container fluid :class="[citaTechMainContainerClass, equipmentsListContainerClass]">
      <v-row>
        <v-col cols="3" style="background-color:transparent">
          <v-card style="margin-top: 14px">
            <v-list rounded subheader style="padding:0">
              <v-subheader
                style="background-color:#424240; width:100%"
                class="white--text body-1"
              >Categoría</v-subheader>
              <v-list-item-group class="pa-2">
                <v-list-item v-for="category in categories" :key="category.id">
                  <v-list-item-content>
                    <v-list-item-title class="body-2" v-text="category.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <v-card style="margin-top: 50px">
            <v-list rounded subheader style="padding:0">
              <v-subheader
                style="background-color:#424240; width:100%"
                class="white--text body-1"
              >Tipo de proyecto</v-subheader>
              <v-list-item-group class="pa-2">
                <v-list-item v-for="type in projectTypes" :key="type.id">
                  <v-list-item-content>
                    <v-list-item-title class="body-2" v-text="type.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9" style="background-color:transparent">
          <v-row v-for="n in 3" :key="n">
            <v-col cols="4" v-for="equipment in equipments" :key="equipment.equipmentID">
              <cita-tech-equipment-card
                :name="equipment.equipmentName"
                :img-src="equipment.equipmentImgSrc"
                :type="equipment.equipmentType"
                :description="equipment.equipmentDescription"
              ></cita-tech-equipment-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </span>
</template>

<script>
import CitaTechPageBackground from "@/js/components/CitaTechPageBackground";
import CitaTechEquipmentCard from "@/js/components/CitaTechEquipmentCard";
export default {
  name: "Equipos",
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
        }
      ],
      categories: [
        { id: 1, text: "Laboratorio" },
        { id: 2, text: "Topografía" },
        { id: 3, text: "Hidrología" },
        { id: 4, text: "Calidad de agua" },
        { id: 5, text: "Drones" }
      ],
      projectTypes: [
        { id: 1, text: "Levantamiento ríos" },
        { id: 2, text: "Unidad hidrodinámica" },
        { id: 3, text: "Unidad hidrosedimentologica" },
        { id: 4, text: "Unidad hidrogeomorfologica" },
        { id: 5, text: "Levantamiento 3D" }
      ]
    };
  },
  computed: {
    citaTechMainContainerClass() {
      return "citaTechMainContainer" + this.$vuetify.breakpoint.name;
    },
    citaPageBackgroundClass() {
      return "citaPageBackground" + this.$vuetify.breakpoint.name;
    },
    searchBarContainerClass() {
      return "searchBarContainer" + this.$vuetify.breakpoint.name;
    },
    equipmentsListContainerClass() {
      return "equipmentsListContainer" + this.$vuetify.breakpoint.name;
    }
  },
  components: {
    CitaTechPageBackground,
    CitaTechEquipmentCard
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
.citaPageBackgroundlg {
  margin-top: 100px !important;
  background-color: transparent;
}
.searchBarContainerlg {
  height: 50px;
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  background-color: rgba(0, 0, 0, 0.1);
  padding-right: 200px !important;
}
.equipmentsListContainerlg {
  background-color: transparent;
  padding-right: 200px !important;
}
</style>