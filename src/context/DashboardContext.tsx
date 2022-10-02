import React, {useEffect} from "react";

// import google realtime database instance
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../firebase";

import { ref, set, onValue } from 'firebase/database';
import { db } from "../firebase";

/**
 * define Type User
 * @property-- @id of type number and @phone of type number
 * @author -- Anil
 */
type User = {
    id:string
    phone:number
    isVerified:boolean
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
    dashboardState:DashboardStateType
    addNewUser:(userId:string, firstName:string, lastName:string, phone:number, isVerified:boolean)=>void    
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
    type: 'GET_USER' | 'SET_USER' | 'SET_EMAIL_VERIFIED'
    payload:{
        user?:User
        event?:Event
        isVerified?:boolean
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
        case 'SET_EMAIL_VERIFIED':{
            // return {...state, user:{...state.user, isVerified:action.payload.isVerified!}}
            return {...state, user:action.payload.user!}
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

    const [dashboardState, dispatch] = React.useReducer(reducer, initialState);

    /**
     * Add users into the realtime data-base
     * @params userId -- string: user id created during the authentication
     * @params firstName -- string: user first name
     * @params lastName -- string: user last name
     * @params phone -- number: user phone number
     * @author: Anil
     */
    const addNewUser = (userId:string, firstName:string, lastName:string, phone:number, isVerified:boolean)=>{
        set(ref(db, `/${userId}`), {firstName, lastName, phone})
        .then(()=>{
            console.log('user successfully created');
            dispatch({type:'SET_USER', payload:{user:{id:userId, phone, isVerified }}});
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('error code = ', errorCode);
            console.error('error message = ', errorMessage);
        });
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){

                onValue(ref(db, `/${currentUser.uid}`),(snapshot)=>{
                    const data = snapshot.val();
                    console.log(data);
                    if(data && data !== null){
                        // const tempData = Object.values(data);
                        // Object.values(data).map((note)=>{
                        //     return refreshAllNote(note);
                        // })
                        // refreshAllNote(tempData!);

                        // console.log(tempData);

                       dispatch({type:'SET_USER', payload:{user:{id:currentUser.uid, phone:data.phone, isVerified:currentUser.emailVerified}}});
                    }
                })

            }
        }); 

        return ()=>{
            unsubscribe();
        };        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <DashboardContext.Provider value={{dashboardState, addNewUser}}>
            {children}
        </DashboardContext.Provider>
    )
}