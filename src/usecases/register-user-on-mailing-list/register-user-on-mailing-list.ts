import { InvalidNameError } from './../../entities/errors/invalid-name-error'
import { InvalidEmailError } from './../../entities/errors/invalid-email-error'
import { Either, left, right } from './../../shared/either'
import { UserData } from './../../entities/user-data'
import { UserRepository } from './ports/user-repository'
import { User } from '../../entities/user'

export class RegisterUserOnMailingList {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async registerUserOnMailingList (request: UserData): Promise<Either<InvalidNameError | InvalidEmailError, UserData>> {
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
