import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => {
  import("./pages/Dashboard");
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
