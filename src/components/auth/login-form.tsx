import CardWrapper from "./card-wrapper"

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Login"
      backButtonLabel="Create an account"
      backButtonHref="/auth/register"
      showSocial
      >
        Login form
      </CardWrapper>
  )
}

export default LoginForm