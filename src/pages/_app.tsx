import '../styles/global.scss';
// import { GreeterClient } from '../proto/helloworld_pb_service';
// import type { GreeterClient as GreeterClientType } from '../proto/helloworld_pb_service';

// const client: GreeterClientType = new GreeterClient(process.env.ENDPOINT);
const client = null;

const App = ({ Component, pageProps }) => <Component {...pageProps} client={client} />;

export default App;
