<template>
  <div class="fadein animation-duration-1000 flex justify-content-center p-4">
    <div class="surface-card border-round shadow-3 p-5 w-full md:w-8 lg:w-6">
      <div class="text-center mb-4">
        <h2 class="m-0">Detalles del cliente</h2>
      </div>

      <div class="grid formgrid gap-3">
        <div class="field col-12">
          <FloatLabel variant="on">
            <InputText id="on_label" v-model="clientName" autocomplete="off" class="w-full" />
            <label>Nombre del cliente</label>
          </FloatLabel>
        </div>

        <div class="field col-12">
          <FloatLabel variant="on">
            <InputText id="on_label" v-model="clientAddress" autocomplete="off" class="w-full" />
            <label>Direccion</label>
          </FloatLabel>
        </div>

        <div class="field col-12">
          <FloatLabel variant="on">
            <InputText id="on_label" v-model="clientId" autocomplete="off" class="w-full" />
            <label>Identificador</label>
          </FloatLabel>
        </div>
      </div>

      <div class="flex justify-content-center mt-4">
        <Button label="Seguir" @click="handleClick" :disabled="!clientName || !clientAddress" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'

const emit = defineEmits(['clientInfo'])

const clientName = ref('')
const clientAddress = ref('')
const clientId = ref(null)

const handleClick = () => {
  emit('clientInfo', {
    name: clientName.value,
    address: clientAddress.value,
    id: clientId.value,
  })
}
</script>
