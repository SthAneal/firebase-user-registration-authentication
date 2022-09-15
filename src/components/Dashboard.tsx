import { Outlet, Link } from "react-router-dom";
import { FlexDiv } from "../styles/globalStyleComponent";
import "../styles/dashboard.scss";

export const Dashboard = ()=>{
    return (
        <FlexDiv flex="1 1 auto" height="100%" className="dashboard">
            <FlexDiv flex="0 1 200px" height="100%" flexDirection="column" gap="10px" className="side-menu">
                <Link to="/create-event/new">Create Events</Link>
                <Link to="/create-event/view">View Events</Link>
                <Link to="/create-event/">Log Out</Link>
            </FlexDiv>
            <Outlet/>
        </FlexDiv>
    )
}