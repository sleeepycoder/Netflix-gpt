// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";


function App() {
  return (
    <Provider store={appStore}>
    <div >
<Body/>
    </div>
    </Provider>
  );
}






export default App;
