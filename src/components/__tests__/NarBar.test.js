import { render, screen,fireEvent} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from '../NavBar';
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render(
    <Router>
        <NavBar/>
    </Router>
    );

//screen.debug();
 const  signInLink = screen.getByRole('link', {name: 'sing in' });
 expect(signInLink).not.toBeInTheDocument()
});   
             
test('renders link to user profile for a logged in user', async () => {
    render(
    <Router>
        <CurrentUserProvider>
        <NavBar />
        </CurrentUserProvider>
    </Router>
    );

const profileAvatar = await screen.findByText('Profile');
expect(profileAvatar).toBeInTheDocument();
});   
     
test('renders sign up button again on out', async () => {
    render(
    <Router>
        <CurrentUserProvider>
        <NavBar />
        </CurrentUserProvider>
    </Router>
    );

const signOutLink = await screen.findByRole('link', {name: 'sign out'})
fireEvent.click(signOutLink)

const signInLink = await screen.findByRole('link', {name: 'sign in'})
const signUpLink = await screen.findByRole('link', {name: 'sign up'})

expect(signInLink).toBeInTheDocument();
expect(signOutLink).toBeInTheDocument();

});   
     


     

      

       


