import { Link, routes } from '@redwoodjs/router'

import UserExamples from 'src/components/UserExample/UserExamples'

export const QUERY = gql`
  query FindUserExamples {
    userExamples {
      id
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userExamples yet. '}
      <Link to={routes.newUserExample()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userExamples }) => {
  return <UserExamples userExamples={userExamples} />
}
