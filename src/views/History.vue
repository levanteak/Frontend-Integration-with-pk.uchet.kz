<template>
  <div class="wrapper">
    <div class="box">
      <h2>История поиска</h2>

      <div v-if="companies.length" class="list">
        <div
            v-for="(c, index) in companies"
            :key="index"
            class="card"
        >
          <p><strong>Название:</strong> {{ c.name_ru }}</p>
          <p><strong>БИН:</strong> {{ c.bin || '—' }}</p>
          <p><strong>Адрес:</strong> {{ c.address_ru }}</p>
          <p><strong>Руководитель:</strong> {{ c.head_fullname || '—' }}</p>
        </div>
      </div>

      <p v-else class="empty">Нет сохранённых компаний.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const companies = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('/api/company')
    companies.value = res.data
  } catch (e) {
    companies.value = []
  }
})
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

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
