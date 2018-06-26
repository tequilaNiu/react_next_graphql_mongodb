import Link from 'next/link'
import '../asserts/styles.less'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
)

export default Header
