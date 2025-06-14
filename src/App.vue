<template>
  <main class="m-auto" style="width: clamp(200px, 95dvw, 600px)">
    <header class="flex flex-column align-items-center gap-1 p-1">
      <img src="../public/logo.png" alt="Logo" class="w-3 h-auto" />
      <p class="text-xs text-center m-0">Generador de presupuestos</p>
    </header>
    <ClientInfoForm v-if="currentStep === 1" @clientInfo="handleClientInfo" />
    <MaterialsForm v-if="currentStep === 2" @materials="handleMaterials" />
    <TotalPriceForm v-if="currentStep === 3" @totalPrice="handlePrice" />

    <div
      v-if="currentStep === 4"
      class="fadein animation-duration-1000 flex justify-content-center p-4"
    >
      <div>
        <div ref="pdfContent" class="receipt">
          <header id="recieptHeader">
            <img src="../public/logo.png" alt="" />
            <p>{{ formattedDate }}</p>
            <p>Id: {{ clientInfo.id }}</p>
          </header>

          <section>
            <h3>Datos del cliente</h3>
            <p>Nombre: {{ clientInfo.name }}</p>
            <p>Direccion: {{ clientInfo.address }}</p>
          </section>

          <section>
            <h5>Materiales</h5>
            <table class="materials-table">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in materials" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.cuantity }}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="notes">
            <h5>Presupuesto válido por 10 días.</h5>
            <p>50% antes de empezar la obra 30 % a mitad de obra 20 % al finalizar</p>
          </section>

          <footer id="receiptFooter" class="">
            <div class="text-left ml-0">
              <p>Importe: {{ formatCurrency(totalPrice.basePrice) }}</p>
              <p>IVA: {{ formatCurrency(totalPrice.tax) }}</p>
              <p>Total: {{ formatCurrency(totalPrice.totalPrice) }}</p>
            </div>
          </footer>
        </div>
        <div class="flex justify-content-center mt-2 gap-2">
          <Button @click="handleClick" severity="danger" icon="pi pi-replay" class />
          <Button @click="downloadPDF">Descargar PDF</Button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ClientInfoForm from './components/ClientInfoForm.vue'
import MaterialsForm from './components/MaterialsForm.vue'
import TotalPriceForm from './components/TotalPriceForm.vue'
import Button from 'primevue/button'
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'
import { format } from 'date-fns'

const currentStep = ref(1)
const clientInfo = ref(null)
const materials = ref(null)
const totalPrice = ref(null)
const now = new Date()
const formattedDate = format(now, 'MM/dd/yy')

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

const handleClick = () => {
  currentStep.value = 1
}

const formatCurrency = (value) => {
  if (typeof value !== 'number') return value
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value)
}

const pdfContent = ref(null)

const downloadPDF = () => {
  if (!pdfContent.value) {
    console.error('PDF content not found')
    return
  }

  const options = {
    margin: 0,
    filename: `presupuesto${clientInfo.value.id}`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  html2pdf().set(options).from(pdfContent.value).save()
}
</script>

<style scoped>
.receipt {
  max-width: 600px;
  padding: 20px;
  background-color: white;
  font-family: 'Courier New', monospace;
  color: black;
  margin: 0 auto;
}

.materials-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.5rem;
}

.materials-table thead th {
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #444;
}

.materials-table tbody tr {
  border-bottom: 1px solid #ccc;
}

.materials-table tbody td {
  padding: 8px;
  border: none;
}

.materials-table th {
  background-color: #f5f5f5;
}

.text-center {
  text-align: center;
}

#recieptHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  font-family: monospace;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

#recieptHeader h1 {
  margin: 0;
  font-size: 1.8rem;
}

#recieptHeader p {
  margin: 0;
  text-align: right;
  font-size: 0.9rem;
}

img {
  height: 60px;
}

#receiptFooter {
  text-align: left;
  padding-left: 350px;
}

#receiptFooter > div {
  margin-left: 100px;
  display: inline-block;
}

#receiptFooter > div > p {
  font-size: 14px;
}
h5 {
  margin-top: 0;
}

#notes,
#notes > p {
  font-size: smaller;
}
#notes > p {
  margin-top: -1rem;
}
</style>
