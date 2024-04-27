import React from "react";
import Calculator from "./components/Calculator";
import Instruction1 from "./components/Instruction1";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Instruction2 from "./components/Instruction2";
import Interruption from "./components/Interruption";
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Instruction1 />
  },
  {
    path: '/instruction2',
    element: <Instruction2 />
  },
  {
    path: '/onscreen',
    element: <Calculator />
  },
  {
    path : '/interruption',
    element : <Interruption />
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Instruction1 />
      </RouterProvider>
    </div>
  );
}

export default App;
