import React, { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { FlexDiv } from "../styles/globalStyleComponent";
import "../styles/dashboard.scss";
import { DashboardContext } from "../context/DashboardContext";


export const Dashboard = ()=>{
    const { dashboardState } = React.useContext(DashboardContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        // if no user navigate to dshboard
        if(!dashboardState.user){
            navigate('/dashboard');
        }else if(!dashboardState.user?.isVerified){ // if user not loggedIn navigate to send verification link 
            navigate('/dashboard/send-v-link');
        }else{
            // if user is verified then go to event page when the url path is dashboard or send-v-link
            if(location.pathname === '/dashboard' || location.pathname === '/dashboard/send-v-link'){
                navigate('/dashboard/event');
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dashboardState.user, navigate])
    

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