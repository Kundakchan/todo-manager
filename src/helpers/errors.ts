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

export default {
  handlerFirebase
}