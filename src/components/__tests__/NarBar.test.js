import { render, screen} from "@testing-library/react";
import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from '../NavBar';
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render(<Router>
        <NavBar />
    </Router>
    );

  screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});
test('renders link to the user profile for alogged in user', async () => {
  render(
    <Router>
    <CurrentUserProvider>
      <NavBar />
    </CurrentUserProvider>
  </Router>
  );



});  

