import React from "react";
// import google realtime database instance
import { ref, set } from 'firebase/database';
import { db } from "../firebase";

/**
 * define Type User
 * @property-- @id of type number and @phone of type number
 * @author -- Anil
 */
type User = {
    id:string
    phone:number
}

/**
 * define Type Event
 * @property-- @name of type string
 * @author -- Anil
 */
type Event = {
    name:string
}

/**
 * define Type DashboardStateType
 * @property-- @user of type User or null and @events of type Event[] or null
 * @author -- Anil
 */
type DashboardStateType = {
    user:User| null
    events:Event[] | null
}

/**
 * define Type DashboardContextType
 * @property-- @state of type DashboardStateType or null 
 * @author -- Anil
 */
type DashboardContextType = {
    state:DashboardStateType
    addNewUser:(userId:string, firstName:string, lastName:string, phone:number)=>void    
}

/**
 * define Type DashboardProviderType
 * @property-- @children of type ReactNode
 * @author -- Anil
 */
type DashboardProviderType = {
    children:React.ReactNode
}

/**
 * define Type DashboardAction
 * @property-- @type of type 'GET_USER' and @payload of type {user:User,event:Event}
 * @author -- Anil
 */
type DashboardAction = {
    type: 'GET_USER' | 'SET_USER'
    payload:{
        user?:User
        event?:Event
    }
}

const reducer = (state:DashboardStateType,action:DashboardAction):DashboardStateType=>{
    switch(action.type){
        case 'GET_USER':{
            // return {...state,user:action.payload.user};
            return state;
        }
        case 'SET_USER':{
            return {...state,user:action.payload.user!};
            //return state;
        }
        default:{
            return state
        }
    }
}

/**
 * define const initialState of type DashboardStateType
 * @property-- @user and @events
 * @author -- Anil
 */
const initialState:DashboardStateType = {
    user:null,
    events:null
}

export const DashboardContext = React.createContext({} as DashboardContextType);

export const DashboardProvider = ({children}:DashboardProviderType)=>{ 

    const [state, dispatch] = React.useReducer(reducer, initialState);

    /**
     * Add users into the realtime data-base
     * @params userId -- string: user id created during the authentication
     * @params firstName -- string: user first name
     * @params lastName -- string: user last name
     * @params phone -- number: user phone number
     * @author: Anil
     */
    const addNewUser = (userId:string, firstName:string, lastName:string, phone:number)=>{
        set(ref(db, `/${userId}`), {firstName, lastName, phone})
        .then(()=>{
            console.log('user successfully created');
            dispatch({type:'SET_USER', payload:{user:{id:userId, phone}}});
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('error code = ', errorCode);
            console.error('error message = ', errorMessage);
        });
    }

    return(
        <DashboardContext.Provider value={{state, addNewUser}}>
            {children}
        </DashboardContext.Provider>
    )
}