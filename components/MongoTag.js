import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spin, Tag } from 'antd';

const MongoTag = () => (
  <Query
    query={gql`
      {
        account { email, password }
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Spin />;
        if (error) return <Tag color="#f50">{error.message}</Tag>;

        return <Tag>{data.account.email}, {data.account.password}</Tag>
      }
    }
  </Query>
)

export default MongoTag