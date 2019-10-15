<template>
  <span>
    <v-layout>
      <v-flex>
        <div class="headline font-weight-regular mb-8" style="margin-top: 60px">Equipos destacados</div>
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
  </span>
</template>

<script>
import CitaTechEquipmentCard from "@/js/components/CitaTechEquipmentCard";

export default {
  name: "CitaTechFeaturedEquipment",
  data() {
    return {
      equipments: [
        {
          equipmentID: 1,
          equipmentName: "Matrice 600 Pro",
          equipmentImgSrc: "drone_matrice_600.png",
          equipmentType: "drone",
          equipmentDescription:
            "Drone con capacidad de carga para fotogrametria, levantamiento 3D con Drone con capacidad de carga para fotogrametria, levantamiento 3D con Drone con capacidad de carga para fotogrametria, levantamiento 3D con Drone con capacidad de carga para fotogrametria, levantamiento 3D con"
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
          equipmentName: "Bathy 500",
          equipmentImgSrc: "bathy_500.png",
          equipmentType: "hydrography",
          equipmentDescription:
            "Equipo para realizar batimetria en una linea de estudio Equipo para realizar batimetria en una linea de estudio Equipo para realizar batimetria en una linea de estudio Equipo para realizar batimetria en una linea de estudio"
        }
      ]
    };
  },
  components: {
    CitaTechEquipmentCard
  }
};
</script>

<style scoped>
.moreEquipmentButton {
  color: white !important;
  background-color: #424040;
}
</style>
