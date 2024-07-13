import { render, screen, fireEvent} from "@testing-library/react";
import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from '../NavBar';

test('renders NavBar', () => {
    render(<Router>
        <NavBar />
    </Router>
    );

  screen.debug();
});   
             
  
     


     

      

       


