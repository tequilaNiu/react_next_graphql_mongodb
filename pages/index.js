import Head from 'next/head'
import '../asserts/styles.less'
import Layout from '../components/MyLayout.js'
import { Link } from '../routes'
import { Input } from 'antd';
const Search = Input.Search;

const PostLink = (props) => (
  <li>
    <Link route={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>

    <h1>My Blog</h1>
    <ul>
      <PostLink id="1"
        title="Hello Next.js"/>
      <PostLink id="2"
        title="Learn Next.js is awesome"/>
      <PostLink id="3"
        title="Deploy apps with Zeit"/>
    </ul>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
  </Layout>
)
