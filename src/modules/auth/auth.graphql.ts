import {gql} from "@apollo/client";

export const LOGIN = gql`
    mutation LogIn($input: LogInInput!) {
  logIn(input: $input) {
    viewer {
      sessionToken
      user {
        username
        objectId
        email
        emailVerified
      }
    }
  }
}
`

export const SIGNUP = gql`
mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
     viewer {
      sessionToken
      user {
        username
        objectId
        email
        emailVerified
      }
    }
  }
}
`