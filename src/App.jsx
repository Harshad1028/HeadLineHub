import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Nav from "./components/Nav";
import News from "./components/News";

const App = () => {
  const [progress, setprogress] = useState(0);

  const pagesize = 15;
  const apikey = import.meta.env.VITE_NEWS_API;

  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="general"
              pagesize={pagesize}
              country="us"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="business"
              pagesize={pagesize}
              country="us"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="entertainment"
              pagesize={pagesize}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="health"
              pagesize={pagesize}
              country="us"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="science"
              pagesize={pagesize}
              country="us"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="sports"
              pagesize={pagesize}
              country="us"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setprogress={setprogress}
              apikey={apikey}
              key="technology"
              pagesize={pagesize}
              country="us"
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
// setprogress=(progress)=>{
//   setState({progress:progress});
// }
