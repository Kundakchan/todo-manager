import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { getFirestore, collection, addDoc, query, getDocs, getDoc, orderBy, limit, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { errors } from "@/helpers";
import dayjs from "dayjs";

// Types
import type { DocumentData } from "firebase/firestore";
import type { Filters, Sorting, SetTask } from '@/stores/tasks/types'

export const useTasksStore = defineStore('tasks', () => {
  const db = reactive(getFirestore())
  const list = ref<DocumentData>([])
  const current = ref<DocumentData | null>(null)
  const loading = ref(false)
  const filters = ref<Filters>({
    limit: 10,
    field: 'status',
    status: 'new'
  })
  const sorting = ref<Sorting>({
    field: 'created',
    order: 'asc'
  })

  const setFilter = ({ field, value }: { field: string, value: string }) => {
    filters.value = { ...filters.value, [field]: value }
  }

  const setSorting = ({ field='created', order='asc' }: Sorting) => {
    sorting.value = { field, order }
  }

  const creating = async ({ name }: { name: string }) => {
    try {
      await addDoc(collection(db, "tasks"), {
        name: name,
        created: dayjs().format(),
        updated: null,
        status: 'new',
        description: null
      })
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }

  const remove = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'tasks', id))
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }

  const get = async (id: string) => {
    setLoading(true)
    try {
      const docRef = doc(db, "tasks", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        current.value = docSnap.data()
      } else {
        errors.handlerCustom(new Error('Документ не найден'))
      }
    } catch (error) {
      errors.handlerFirebase(error)
    } finally {
      setLoading(false)
    }
  }

  const update: SetTask = async ({ id, name, status, description }) => {
    setLoading(true)
    try {
      const docRef = doc(db, "tasks", id)
      await updateDoc(docRef, {
        name,
        status,
        description,
        updated: dayjs().format()
      })
    } catch (error) {
      errors.handlerFirebase(error)
    } finally {
      setLoading(false)
    }
  }

  const getList = async () => {
    setLoading(true)
    try {
      let q = query(
        collection(db, 'tasks'),
        where(filters.value.field, '==', filters.value.status),
        orderBy(sorting.value.field, sorting.value.order),
        limit(filters.value.limit)
      )

      if (filters.value.status === 'all') {
        q = query(
          collection(db, 'tasks'),
          orderBy(sorting.value.field, sorting.value.order),
          limit(filters.value.limit)
        )
      }

      const docs = await getDocs(q)
      list.value = []
      docs.forEach((doc) => {
        list.value.push({...doc.data(), id: doc.id})
      });
    } catch (error) {
      errors.handlerFirebase(error)
    } finally {
      setLoading(false)
    }
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return { creating, remove, get, update, getList, setFilter, setSorting, list, loading, current, filters }
})