import UserExample from 'src/components/UserExample/UserExample'

export const QUERY = gql`
  query FindUserExampleById($id: Int!) {
    userExample: userExample(id: $id) {
      id
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserExample not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userExample }) => {
  return <UserExample userExample={userExample} />
}
