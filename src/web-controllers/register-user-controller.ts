import { MissingParamError } from '@/web-controllers/errors/missing-param-error';
import { UserData } from '@/entities'
import { HttpResponse, HttpRequest } from '@/web-controllers/ports'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { badRequest, created } from '@/web-controllers/util'

export class RegisterUserController {
  private readonly usecase: RegisterUserOnMailingList

  constructor (usecase: RegisterUserOnMailingList) {
    this.usecase = usecase
  }

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    if (!(request.body.name) || !(request.body.email)) {
      let missingParam = !(request.body.name) ? 'name ' : ''
      missingParam += !(request.body.email) ? 'email' : ''
      return badRequest(new MissingParamError(missingParam.trim()))
    }

    const userData: UserData = request.body
    const response = await this.usecase.registerUserOnMailingList(userData)

    if (response.isLeft()) {
      return badRequest(response.value)
    }

    if (response.isRight()) {
      return created(response.value)
    }
  }
}
