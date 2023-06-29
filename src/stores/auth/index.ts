import { ref, reactive } from "vue"
import { defineStore } from "pinia"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { errors } from "@/helpers"

// Types import
import type { User } from "firebase/auth"
import type { AuthParam, RegistrationParam } from "./auth"

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive(getAuth())
  const user = ref<User | null>(null)

  const login = async ({ email, password }: AuthParam) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      await updateProfile(user.value, { displayName: name })
    } catch (error) {
      errors.handlerFirebase(error)
    }
  }
  return { login, logout, registration, user}
})