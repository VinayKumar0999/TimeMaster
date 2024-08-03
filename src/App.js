import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Header from './common/HeaderComponent'
import RegisterForm from './common/RegistrationForm'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

const About = () => (
    <div>
        <h2>About Page</h2>
        <Outlet />
    </div>
);

const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

function App() {
    return (
        <Router>
           <Header/>
            <Routes>
              <Route path="/" element={<RegisterForm />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                
            </Routes>
        </Router>
    );
}

export default App;