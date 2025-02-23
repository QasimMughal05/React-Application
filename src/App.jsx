import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home";
import PostCreate from "./Pages/PostCreate";
import NoPage from "./Pages/NoPage";
import Hooks from "./Pages/Hooks";
import Hooksecond from "./Pages/Hooksecond";
import UseRefhok from "./Pages/UseRefhok";
import UseContextHook from "./Pages/UseContextHook";


function App () {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout/> }>
            <Route index element={<Home/> }/>
            <Route path="create" element={<PostCreate/>  }/>
            <Route path="Hook" element={<Hooks/>  }/>
            <Route path="Hooksecond" element={<Hooksecond/>  }/>
            <Route path="UseRefhook" element={<UseRefhok/>  }/>
            <Route path="UseContextHook" element={<UseContextHook/>  }/>
            <Route path="*" element={<NoPage/>  }/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
 
}

export default App;