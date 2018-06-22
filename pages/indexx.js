import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios';
import { Button } from 'antd';
import { debug } from 'util';

const Index = (props) => (
  <Layout>
    <link rel='stylesheet' href='http://cdn.bootcss.com/antd/2.9.3/antd.css' />
    <h1>Batman TV Showsssss</h1>
    <Button>Default</Button>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} 
            href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await axios('https://api.tvmaze.com/search/shows?q=batman')
  const data = res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index