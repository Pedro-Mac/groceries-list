<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { addDoc, collection, doc, getDocs, type DocumentData } from 'firebase/firestore'
import { db } from './config/firebase'

const item = ref('')
const isLoading = ref(false)
const itemsList = ref<DocumentData[]>([])

const getList = () => {
  getDocs(collection(db, "items")).then(querySnapshot => {
    const a = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log(a)
    itemsList.value = a
  });

  console.log('during promise')
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

</script>

<template>
  <main>
    <form @submit.prevent="addItem">
      <input type="text" v-model="item" placeholder="Item" :disabled="isLoading" />
      <button>Add item</button>
    </form>

    <ul v-if="!isLoading">
      <li v-for="item in itemsList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

  </main>
</template>




<style scoped></style>
