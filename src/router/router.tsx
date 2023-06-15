import { createBrowserRouter } from "react-router-dom";
import JobLists from "../pages/jobLists/jobLists.component";
import CreateJob from "../pages/createJob/createJob.component";
import App from "../App";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<JobLists />,
            },
            {
                path:'/createJob',
                element:<CreateJob />
            }
        ]
    }
]);

export default router;