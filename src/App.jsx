import "./App.css";
import Header from "./Components/Header.jsx";
import Action from "./Components/Body.jsx";
import Content from "./Components/Contents.jsx";
import Footer from "./Components/Footer.jsx";
/**
 * App is the main component of the application.
 *
 * It renders the main elements of the page:
 *   - Header: contains the navigation bar
 *   - Action: contains the call-to-action section
 *   - Content: contains the main content of the page
 *   - Footer: contains the footer of the page
 *
 * The component uses the useState hook to keep track of the count state.
 * The count state is not currently used, but it could be used to track the number
 * of times the user has clicked on the call-to-action button.
 */
const App = () => {
  return (
    <>
      <Header />
      <Action />
      <Content />
      <Footer />
    </>
  );
};

export default App;
