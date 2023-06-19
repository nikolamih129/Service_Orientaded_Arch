import { Container, Row } from 'react-bootstrap';
import NavBar from "./components/navbar/NavBar";
import Songs from "./pages/Songs";
import {ThemeProvider} from "./ThemeContext";
import Favorites from "./pages/Favorites";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    component: <Songs/>,
    exact: true,
  },
  {
    path: '/favorites',
    component: <Favorites/>,
  }
]

function App(){
  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
       />
    })
  }

return (
  <ThemeProvider>
    <Router>
      <NavBar/>
      <Container>
        <Row className="mt-5">
          <Routes>
            {getRoutes()}
          </Routes>
        </Row>
      </Container>
    </Router>
  </ThemeProvider>
);
}

export default App;