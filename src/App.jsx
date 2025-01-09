import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home";
import PostCreate from "./Pages/PostCreate";

function App () {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout/> }>
            <Route index element={<Home/> }/>
            <Route path="create" element={<PostCreate/>  }/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
 
}

export default App;