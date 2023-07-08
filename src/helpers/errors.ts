import { FirebaseError } from "firebase/app"
import { notification } from "ant-design-vue"

const handlerFirebase = (error: FirebaseError | unknown): void => {
  if (error instanceof FirebaseError) {
    notification.error({
      placement: 'topRight',
      message: error.name,
      description: error.message,
      duration: 3
    })
  } else {
    console.error('error: unknown')
  }
  throw error
}

const handlerCustom = (error: Error): void => {
  notification.error({
    placement: 'topRight',
    duration: 3,
    message: error.name,
    description: error.message
  })
}

export default {
  handlerFirebase,
  handlerCustom
}