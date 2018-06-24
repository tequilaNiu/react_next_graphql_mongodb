// import axios from 'axios'
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

class Post extends React.Component {
  static async getInitialProps({query}) {
    // const data = res.data
    // const res = await axios('http://localhost:3000/getUser');

    console.log('Show data fetched. Count: 1')

    return {
      index: 1,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    }
  }

  myClick = () => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = () => {
      console.log('data returned:', xhr.response);
      this.setState({
        userName: xhr.response.data.user.name
      })
    }
    xhr.send(JSON.stringify({query: "{ user { name } }"}));
    // axios.post(`/api/getUser`, {
    //   query: JSON.stringify({name})
    // }).then(function(res) {
    //   console.log('res back');
    // })
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <h1>{router.query.id}</h1>
        <p>This is the blog post content.</p>
        <p>计数器： {this.props.index}</p>
        <button onClick={this.myClick}>点我</button>{this.state.userName}
      </Layout>
    )
  }
}

export default withRouter(Post)
