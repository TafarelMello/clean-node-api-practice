import { SignUpController } from './signup'

describe('SignUp Controler', () => {
  test('Should return 400 if no name is provided', () => {
    // SUT System under test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
