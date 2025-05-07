<template>
  <div class="container">
    <div class="box">
      <h1>Интеграция с pk.uchet.kz</h1>
      <div class="buttons">
        <button @click="$router.push('/search')">Поиск по БИН</button>
        <button @click="$router.push('/history')">История поиска</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f9;
}

.box {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #333;
}

.buttons button {
  margin: 0 10px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #1e40af;
}
</style>
