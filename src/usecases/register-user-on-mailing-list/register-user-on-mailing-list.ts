import { UseCase } from '@/usecases/ports'
import { InvalidNameError, InvalidEmailError } from '@/entities/errors'
import { Either, left, right } from '@/shared'
import { UserData, User } from '@/entities'
import { UserRepository } from '@/usecases/register-user-on-mailing-list/ports'

export class RegisterUserOnMailingList implements UseCase {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: UserData): Promise<Either<InvalidNameError | InvalidEmailError, UserData>> {
    const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(request)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    if (!await this.userRepo.exists(request)) {
      await this.userRepo.add(request)
    }

    return right(request)
  }
}
