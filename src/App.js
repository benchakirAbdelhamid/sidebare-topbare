import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nabvar from "./components/Nabvar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./App.css";

const routesList = [
  {id : 1,
  path : '/',
element : <Page1 />
},
  {id : 2,
  path : '/Page2',
element : <Page2 />
},
  {id : 3,
  path : '/Page3',
element : <Page3 />
},
  {id : 4,
  path : '*',
element : <> not found</>
},
]

function App() {
  return (
    <Router>
      <SideBar>
        <Nabvar/>
        <Routes>
          {routesList?.map(itemRoutes=>
            <Route key={itemRoutes.id} path={itemRoutes.path} element={itemRoutes.element}  />
          )}
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
