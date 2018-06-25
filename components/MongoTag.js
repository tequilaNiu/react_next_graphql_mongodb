import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spin, Tag } from 'antd';

const MongoTag = (props) => (
  <Query
    query={gql`
      {
        account(id: ${props.pageId}) { email, password, id }
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Spin />;
        if (error) return <Tag color="#f50">{error.message}</Tag>;

        const { id, email, password } = data.account;
        return <Tag>{id}, {email}, {password}</Tag>
      }
    }
  </Query>
)

export default MongoTag