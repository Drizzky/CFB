<template>
  <div class="fadein animation-duration-1000 flex justify-content-center p-4">
    <div class="surface-card border-round shadow-3 p-5" style="width: clamp(200px, 95dvw, 600px)">
      <div class="text-center mb-4">
        <h2 class="m-0">Materiales</h2>
      </div>

      <form @submit.prevent="addMaterial" class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
        <div class="w-full flex-grow-1">
          <FloatLabel class="w-full">
            <InputText
              id="material-name"
              v-model="materialName"
              class="w-full"
              autocomplete="off"
            />
            <label for="material-name">Nombre</label>
          </FloatLabel>
        </div>

        <div class="w-full flex-grow-1 flex gap-3">
          <FloatLabel class="w-full" style="max-width: 12rem">
            <InputNumber
              v-model="materialQuantity"
              inputId="materialQuantity"
              inputClass="w-full"
              class="w-full"
              :min="0"
              :max="999"
            />
            <label for="material-qty">Cantidad</label>
          </FloatLabel>
          <div class="w-3rem">
            <Button icon="pi pi-plus" class="p-button-sm h-full" />
          </div>
        </div>
      </form>
      <p>dead grandma</p>
      <div class="flex justify-content-center gap-2 mt-4">
        <Button label="Generar y descargar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
</script>

<style></style>
