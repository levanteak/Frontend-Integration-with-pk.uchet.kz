<template>
  <div class="wrapper">
    <div class="box">
      <h2>Поиск компании по БИН</h2>

      <div class="form">
        <input v-model="bin" placeholder="Введите БИН" />
        <button @click="search">Искать</button>
      </div>

      <div v-if="company" class="result">
        <div class="card">
          <p><strong>Название:</strong> {{ company.name_ru }}</p>
          <p><strong>Полное название:</strong> {{ company.name_kz }}</p>
          <p><strong>БИН:</strong> {{ company.bin }}</p>
          <p><strong>Адрес:</strong> {{ company.address_ru }}</p>
          <p><strong>Руководитель:</strong> {{ company.head_fullname }}</p>
          <p><strong>KATO:</strong> {{ company.kato_code }}</p>
          <p><strong>ИНН:</strong> {{ company.iin || '—' }}</p>
        </div>
      </div>

      <p v-else-if="searched" class="empty">Ничего не найдено</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const bin = ref('')
const company = ref(null)
const searched = ref(false)

const search = async () => {
  try {
    const res = await axios.get(`/api/company/${bin.value}`)
    company.value = res.data
    searched.value = true
  } catch (error) {
    company.value = null
    searched.value = true
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 40px 20px;
}

.box {
  max-width: 700px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  color: #222;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  background-color: #2d6cdf;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #1e4bb2;
}

.card {
  background: #eef2f7;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #2563eb;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.empty {
  text-align: center;
  color: #777;
}
</style>
