import { UserData } from './user-data'
import { Email } from './email'
import { Name } from './name'
import { Either, left, right } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'

export class User {
  public readonly email: Email
  public readonly name: Name

  private constructor (name: Name, email: Email) {
    this.name = name
    this.email = email
  }

  static create (userData: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(userData.name)
    if (nameOrError.isLeft()) {
      return left(nameOrError.value)
    }

    const emailOrError = Email.create(userData.email)
    if (emailOrError.isLeft()) {
      return left(emailOrError.value)
    }

    const name: Name = nameOrError.value as Name
    const email: Email = emailOrError.value as Email

    return right(new User(name, email))
  }
}
