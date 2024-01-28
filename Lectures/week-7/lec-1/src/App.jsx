import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
// Lazy Loading
const Dashboard = lazy(() => {
  import("./pages/Dashboard");
});

function App() {
  return (
    <div>
    <button >

    </button>
    <BrowserRouter>
      <Routes>
        {/* Does not get fetched immeditaealy, so add the suspense API */}
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard /></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
