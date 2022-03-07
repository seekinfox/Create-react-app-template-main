import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Features/Loading/Loading';
import "./stylesheets/main.scss"
const App = React.lazy(() => import("./App"))

function Index() {
  return(
    <>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

