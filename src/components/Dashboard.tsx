import React, {useEffect} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FlexDiv } from "../styles/globalStyleComponent";
import "../styles/dashboard.scss";
import { DashboardContext } from "../context/DashboardContext";


export const Dashboard = ()=>{
    const { state } = React.useContext(DashboardContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!state.user){
            navigate('/dashboard');
        }
    },[navigate, state.user])

    return (
        <FlexDiv flex="1 1 auto" minHeight="100%" className="dashboard">
            <FlexDiv flex="0 1 200px" height="100%" flexDirection="column" gap="10px" className="side-menu">
                <Link to="/dashboard/event">View Events</Link>
                <Link to="/dashboard/event/new">Create Events</Link>
                <Link to="/dashboard">Log Out</Link>
            </FlexDiv>
            <Outlet/>
        </FlexDiv>
    )
}