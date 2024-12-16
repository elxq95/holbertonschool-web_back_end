export default function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
    // ({firstName: firstName, lastName: lastName})
  }