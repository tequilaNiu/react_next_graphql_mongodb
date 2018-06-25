import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spin, Tag } from 'antd';

const SqlTag = (props) => (
  <Query
    query={gql`
      {
        user(id: ${props.pageId}) { name, age, id }
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Spin />;
        if (error) return <Tag color="#f50">{error.message}</Tag>;

        const { id, name, age } = data.user;
        return <Tag>{id}, {name}, {age}</Tag>
      }
    }
  </Query>
)

export default SqlTag