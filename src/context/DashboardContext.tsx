import React from "react";

/**
 * define Type User
 * @property-- @id of type number and @phone of type number
 * @author -- Anil
 */
type User = {
    id:number
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
    type: 'GET_USER'
    payload:{
        user:User
        event:Event
    }
}

const reducer = (state:DashboardStateType,action:DashboardAction)=>{
    switch(action.type){
        case 'GET_USER':{
            return state;
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

    return(
        <DashboardContext.Provider value={{state}}>
            {children}
        </DashboardContext.Provider>
    )
}