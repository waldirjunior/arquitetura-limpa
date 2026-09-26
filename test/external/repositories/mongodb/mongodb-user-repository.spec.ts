import { MongoHelper } from '@/external/repositories/mongodb/helper/mongo-helper'

describe('Mongo User Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    await MongoHelper.clearCollection('users')
  })

  test('when user is added, it should exist', async () => {
    const userRepository = new MongodbUserRepository()
    await userRepository.add({
      name: 'any_name',
      email: 'any@email.com'
    })
    expect(await userRepository.exists('any@mail.com')).toBeTruthy()
  })
})
