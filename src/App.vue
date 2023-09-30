<template>
  <main>
    <form @submit.prevent="addItem">
      <input type="text" v-model="item" placeholder="Item" :disabled="isLoading" />
      <div class="submit--btn-container">
        <button>Add item</button>
        <span v-if="isLoading" class="loader"></span>
      </div>
    </form>

    <ul>
      <li v-for="item in itemsList" :key="item.id" class="list--item">
        <p>
          {{ item.name }}
        </p>
        <button @click="deleteItem(item.id)">X</button>
      </li>
    </ul>

  </main>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { addDoc, collection, getDocs, type DocumentData, deleteDoc, doc } from 'firebase/firestore'
import { db } from './config/firebase'

const item = ref('')
const isLoading = ref(false)
const itemsList = ref<DocumentData[]>([])

const getList = () => {
  getDocs(collection(db, "items")).then(querySnapshot => {
    const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    itemsList.value = list
  });
}

onMounted(() => {
  getList()
})


async function addItem() {
  try {
    isLoading.value = true
    await addDoc(collection(db, "items"), {
      name: item.value,
      time: new Date()
    })

    getList()
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  } finally {
    isLoading.value = false
  }
}


async function deleteItem(id: string) {
  isLoading.value = true
  try {
    await deleteDoc(doc(db, "items", id));
    getList()
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.loader {
  width: 16px;
  height: 16px;
  border: 2px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.submit--btn-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.list--item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
