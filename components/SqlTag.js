import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spin, Tag } from 'antd';

const SqlTag = () => (
  <Query
    query={gql`
      {
        user { name, age }
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Spin />;
        if (error) return <Tag color="#f50">{error.message}</Tag>;

        return <Tag>{data.user.name}, {data.user.age}</Tag>
      }
    }
  </Query>
)

export default SqlTag