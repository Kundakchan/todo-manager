import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth"
import { errors } from "@/helpers"

// Types import
import type { User } from "firebase/auth"
import type { AuthParam, RegistrationParam } from "./auth"

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive(getAuth())
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  onAuthStateChanged(auth, currentUser => {
    user.value = currentUser
    localStorage.setItem('isLoggedIn', JSON.stringify({ value: !!user.value }))
  })

  const login = async ({ email, password }: AuthParam) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }

  const registration = async ({ name, email, password }: RegistrationParam) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      if (user.value) {
        await updateProfile(user.value, { displayName: name })
      }
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }
  return { login, logout, registration, user, isLoggedIn}
})