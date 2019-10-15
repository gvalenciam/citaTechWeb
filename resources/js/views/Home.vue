<template>
  <span>
    <cita-tech-main-container></cita-tech-main-container>
  </span>
</template>

<script>
import CitaLogoBar from "@/js/components/CitaLogoBar";
import CitaTechMainContainer from "@/js/components/CitaTechMainContainer";

export default {
  name: "home",
  components: {
    CitaTechMainContainer,
    CitaLogoBar
  }
};
</script>
