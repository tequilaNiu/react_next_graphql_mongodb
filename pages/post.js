// import axios from 'axios'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
// import SqlTag from '../components/SqlTag.js'
// import MongoTag from '../components/MongoTag.js'
// import Breadcrumb from '../components/Breadcrumb.js'
import { Button, Spin } from 'antd'

const SqlTag = dynamic(import('../components/SqlTag'))
const MongoTag = dynamic(import('../components/MongoTag'))
const Breadcrumb = dynamic(import('../components/Breadcrumb'), {
  loading: () => <Spin />,
})

class Post extends React.Component {
  static async getInitialProps({query}) {
    // const data = res.data
    // const res = await axios('http://localhost:3000/getUser');

    console.log('Show data fetched. Count: 1')

    return {}
  }

  constructor(props) {
    super(props);

    this.state = {
      index: 1
    }
  }

  // myClick = () => {
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'json';
  //   xhr.open("POST", "/graphql");
  //   xhr.setRequestHeader("Content-Type", "application/json");
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onload = () => {
  //     console.log('data returned:', xhr.response);
  //     this.setState({
  //       userName: xhr.response.data.user.name
  //     })
  //   }
  //   xhr.send(JSON.stringify({query: "{ user { name } }"}));
  //   // axios.post(`/api/getUser`, {
  //   //   query: JSON.stringify({name})
  //   // }).then(function(res) {
  //   //   console.log('res back');
  //   // })
  // }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Breadcrumb />
        <h1>{router.query.id}</h1>
        <p>This is the blog post content.</p>
        <p>计数器： {this.state.index} &nbsp; <Button onClick={() => {this.setState({ index: this.state.index + 1 })}} >戳我</Button></p>
        <br />
        <SqlTag pageId={router.query.id} />
        <br />
        <MongoTag pageId={router.query.id} />
      </Layout>
    )
  }
}

export default withRouter(Post)
