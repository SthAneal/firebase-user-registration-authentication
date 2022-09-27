import React, { useRef } from "react";
import { FlexDiv } from "../styles/globalStyleComponent";
import { Button } from "./Button";
import { Input } from "./Input";

import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase";

export const Auth = ()=>{
    // reference for NEW TO EVENTME? Tab and ALREADY REGISTERED? Tab
    const newToTab = useRef<HTMLDivElement>(null);
    const alreadyRegTab = useRef<HTMLDivElement>(null);

    const toggleTab = (e:React.MouseEvent<HTMLElement>, tab:React.RefObject<HTMLDivElement>)=>{
        const tabsBody = document.getElementsByClassName('tab__body--sec');
        const tabCapsule = document.getElementsByClassName('tab__capsule');

        // select or unselect tab capsule
        Array.from(tabCapsule).forEach((elem)=>{
            elem.classList.remove('tab__capsule--selected');
        });

        e.currentTarget.classList.add('tab__capsule--selected');

        // show or hide tabs body
        Array.from(tabsBody).forEach((elem)=>{
            elem.classList.add('tab__body--sec-hide');
        });

        tab.current?.classList.remove('tab__body--sec-hide');
    }


    return (
        <FlexDiv flex="1 1 auto" minHeight="100%" justifyContent="center" alignItems="center" className="authentication"> 
            <FlexDiv flex="0 1 500px"  className="tab" flexDirection="column" justifyContent="start" gap="5px">
                <FlexDiv flex="1" width="100%" className="tab__capsule-wrapper" gap="2px">
                    <FlexDiv flex="1" className="tab__capsule" justifyContent="center" onClick={(e:React.MouseEvent<HTMLElement>)=>toggleTab(e, newToTab)}>NEW TO EVENTME?</FlexDiv>
                    <FlexDiv flex="1" className="tab__capsule tab__capsule--selected" justifyContent="center" onClick={(e:React.MouseEvent<HTMLElement>)=>toggleTab(e, alreadyRegTab)}>ALREADY REGISTERED?</FlexDiv>
                </FlexDiv>
                <FlexDiv flex="1 1 auto" width="100%" className="tab__body" flexDirection="column">
                    <FlexDiv flex="1" width="100%" flexDirection="column" gap="20px" alignItems="center" className="tab__body--sec" ref={alreadyRegTab}>
                        <form onSubmit={()=>alert('logged In')} className="tab__body--sec-form">
                            <Input label="EMAIL" type="email" name="email" labelFor="loginEmail" 
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" 
                                title="Should be a valid email"
                                required={true}/>

                            <Input label="PASSWORD" type="password" name="password" labelFor="loginPassword" required={true}/>

                            <Button typeVariant="contained" typeColor="primary">LOG IN</Button>
                            {/* <Button typeVariant="contained" typeColor="secondary">LOG IN</Button>
                            <Button typeVariant="outlined" typeColor="primary">LOG IN</Button>
                            <Button typeVariant="outlined" typeColor="secondary">LOG IN</Button> */}
                            <Button typeVariant="text" typeColor="primary">Forgot Password?</Button>
                        </form>
                    </FlexDiv>

                    <FlexDiv flex="1" width="100%" flexDirection="column" gap="20px" alignItems="center" className="tab__body--sec tab__body--sec-hide" ref={newToTab}>
                        <form onSubmit={()=>alert('registered')} className="tab__body--sec-form">
                            <Input label="FIRST NAME" type="text" name="userFirstName" labelFor="userFirstName" 
                                pattern="^[a-zA-Z0-9]*$" 
                                title="Atleast one number of letter" 
                                required={true}/>

                            <Input label="LAST NAME" type="text" name="userLastName" labelFor="userLastName" 
                                pattern="^[a-zA-Z0-9]*$" 
                                title="Atleast one number of letter" 
                                required={true}/>

                            <Input label="PHONE NUMBER" type="tel" name="userContactNo" labelFor="userPhone"
                                pattern="[0-9]{10}"
                                title="any 10 digits number"
                                required={true}/>
                            
                            <Input label="EMAIL" type="email" name="signupEmail" labelFor="signupEmail" 
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" 
                                title="Should be a valid email"
                                required={true}/>


                            <Input label="PASSWORD" type="password" name="password" labelFor="registerPassword" 
                                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$"
                                title="At least one lower case letter, one upper case letter, one digit,6 to 12 length and no spce."
                                required={true}/>

                            <Button typeVariant="contained" typeColor="primary">REGISTER IN</Button>
                        
                            <FlexDiv className="terms-condition">Creating account means you will agree to our</FlexDiv> <Button typeVariant="text" typeColor="primary">Terms & Conditions</Button>
                        </form>
                        
                    </FlexDiv>

                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}