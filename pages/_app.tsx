import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import "../styles/QuestionComponent.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
