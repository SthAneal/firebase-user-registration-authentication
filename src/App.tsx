import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout';
import { Error } from './components/Error';


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
          <Route index />
          <Route path="/aboutus" caseSensitive={false}/>
          <Route path="/contactus" caseSensitive={false}/>
          <Route path="/privacy" caseSensitive={false}/>
          <Route path="/faq" caseSensitive={false}/>
          <Route path="/create-event" caseSensitive={false}>
            <Route index />
            <Route path="/create-event/new" caseSensitive={false}/>
            <Route path="/create-event/view" caseSensitive={false}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
