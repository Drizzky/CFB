<template>
  <main class="m-auto" style="width: clamp(200px, 95dvw, 600px)">
    <header>
      <h1>CFB</h1>
      <p>Generador de presupuestos</p>
    </header>
    <ClientInfoForm v-if="currentStep === 1" @clientInfo="handleClientInfo" />
    <MaterialsForm v-if="currentStep === 2" @materials="handleMaterials" />
    <TotalPriceForm v-if="currentStep === 3" @totalPrice="handlePrice" />

    <div
      v-if="currentStep === 4"
      class="fadein animation-duration-1000 flex justify-content-center p-4"
    >
      <div class="surface-card border-round shadow-3 p-5 w-full md:w-8 lg:w-6">
        <h2 class="text-center">Confirmacion</h2>
        <section>
          <h3>Datos del cliente</h3>
          <div class="ml-3">
            <p>Nombre: {{ clientInfo.name }}</p>
            <p>Direccion: {{ clientInfo.address }}</p>
            <p>Identificador: {{ clientInfo.id }}</p>
          </div>
        </section>
        <section>
          <h3>Materiales</h3>
          <DataTable :value="materials" tableStyle="min-width: 20rem">
            <Column field="name" header="Nombre"></Column>
            <Column field="cuantity" header="Cantidad"></Column>
          </DataTable>
        </section>

        <section>
          <h3>Precio</h3>
          <div class="ml-3">
            <p>Importe: €{{ totalPrice.basePrice }}</p>
            <p>IVA: €{{ totalPrice.tax }}</p>
            <p>Total: €{{ totalPrice.totalPrice }}</p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import ClientInfoForm from './components/ClientInfoForm.vue'
import MaterialsForm from './components/MaterialsForm.vue'
import TotalPriceForm from './components/TotalPriceForm.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { ref } from 'vue'

const currentStep = ref(1)
const clientInfo = ref(null)
const materials = ref(null)
const totalPrice = ref(null)

const handleClientInfo = (value) => {
  clientInfo.value = value
  currentStep.value = 2
}

const handleMaterials = (value) => {
  materials.value = value
  currentStep.value = 3
}
const handlePrice = (value) => {
  totalPrice.value = value
  currentStep.value = 4
}
</script>
