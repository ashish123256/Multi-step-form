import {BrowserRouter, Routes, Route} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
function App(){
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Desktop1/>}/>
    <Route path="/desktop2" element={<Desktop2/>}/>
    <Route path="/desktop3" element={<Desktop3/>}/>
  </Routes>
</BrowserRouter>
  )

}


export default App;