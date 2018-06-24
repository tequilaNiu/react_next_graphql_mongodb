import Header from './Header'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const link = createHttpLink({ uri: '/graphql', fetch: fetch });


const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: '/graphql',
    fetch
  }),
  cache: new InMemoryCache(),
});

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <ApolloProvider client={client}>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </ApolloProvider>
)

export default Layout
