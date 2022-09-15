import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout';
import { Error } from './components/Error';
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import { Auth } from "./components/Auth";
import { CreateNewEvent } from "./components/CreateNewEvent";
import { ViewEvents } from "./components/ViewEvents";

// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Woolie } from './components/Woolie';
// import { Coles } from './components/Coles';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" caseSensitive={false} element={<Layout/>}>
    //       <Route index element={<HomeContextProvider><Home/></HomeContextProvider>}/>
    //       <Route path="/mynote" caseSensitive={false} element={<MyNotesProvider><MyNoteWrapper/></MyNotesProvider>}>
    //         <Route path="/mynote" caseSensitive={false} element={<Auth/>}/>
    //         <Route path="/mynote/docket" caseSensitive={false} element={<MyNote/>}>
    //         </Route>
    //       </Route>
    //       <Route path="*" element={<Error/>}/>
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Layout/>}>
          <Route index element={<Landing/>}/> 
          <Route path="/aboutus" caseSensitive={false}/>
          <Route path="/contactus" caseSensitive={false}/>
          <Route path="/privacy" caseSensitive={false}/>
          <Route path="/faq" caseSensitive={false}/>
        </Route>
          
        <Route path="/create-event" caseSensitive={false} element={<Dashboard/>}>
          <Route index element={<Auth/>}/>
          <Route path="/create-event/new" caseSensitive={false} element={<CreateNewEvent/>}/>
          <Route path="/create-event/view" caseSensitive={false} element={<ViewEvents/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>

  );
}

export default App;
