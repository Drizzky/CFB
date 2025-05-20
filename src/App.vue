<template>
  <main class="m-auto" style="width: clamp(200px, 95dvw, 600px)">
    <header>
      <h1>CFB</h1>
      <p>Generador de facturas</p>
    </header>
    <ClientInfoForm v-if="currentStep === 1" @clientInfo="handleClientInfo" />
    <MaterialsForm v-if="currentStep === 2" />
  </main>
</template>

<script setup>
import ClientInfoForm from './components/ClientInfoForm.vue'
import MaterialsForm from './components/MaterialsForm.vue'
import { ref } from 'vue'

const currentStep = ref(1)
const clientInfo = ref(null)

const handleClientInfo = (value) => {
  clientInfo.value = value
  currentStep.value = 2
}
</script>

<style scoped></style>
