import Layout from '../components/MyLayout.js'

// import Link from 'next/link'
import { Link } from '../routes'

const PostLink = (props) => (
  <li>
    <Link route={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="1"
        title="Hello Next.js"/>
      <PostLink id="2"
        title="Learn Next.js is awesome"/>
      <PostLink id="3"
        title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
