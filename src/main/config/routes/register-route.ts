import { Router } from 'express'
import { adaptRoute } from '@/main/config/adapters'
import { makeRegisterUserController } from '@/main/factories'

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterUserController()))
}
