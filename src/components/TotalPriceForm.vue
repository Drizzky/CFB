<template>
  <div class="fadein animation-duration-1000 flex justify-content-center p-4">
    <div class="surface-card border-round shadow-3 p-5 w-full md:w-8 lg:w-6">
      <div class="text-center mb-4">
        <h2 class="m-0">Importe</h2>
      </div>

      <div class="grid formgrid gap-3">
        <div class="field col-12">
          <FloatLabel variant="on">
            <InputText
              id="on_label"
              v-model="price"
              autocomplete="off"
              class="w-full"
              type="number"
            />
            <label>Importe</label>
          </FloatLabel>
          <p class="text-center">Se le agregara €{{ addTax.tax }} de IVA</p>
        </div>
      </div>

      <div class="flex justify-content-center mt-2">
        <Button label="Seguir" @click="handleClick" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'

const price = ref(null)
const addTax = computed(() => {
  const basePrice = Number(price.value)
  const tax = 0.21 * basePrice
  const totalPrice = tax + basePrice
  return { totalPrice, tax, basePrice }
})

const emit = defineEmits(['totalPrice'])
const handleClick = () => {
  emit('totalPrice', addTax.value)
}
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
