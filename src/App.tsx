import { Outlet } from "react-router-dom";
import Nav from "./components/nav/nav.component";

const routerConfig=[
  {
    name:'Job Lists',
    link:'/',
    key:'jobLists'
  },
  {
    name:'Create Job',
    link:'/createJob',
    key:'createJob'
  }
]

function App() {
  return (
   <div id='container' className="flex flex-col flex-nowrap">
    <Nav config={routerConfig}/>
    <Outlet />
   </div>
  );
}

export default App;
