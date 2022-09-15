import { FlexDiv } from "../styles/globalStyleComponent";
import { Button } from "./Button";
import { Input } from "./Input";

export const Auth = ()=>{
    return (
        <FlexDiv flex="1 1 auto" height="100%" justifyContent="center" alignItems="center"> 
            <FlexDiv flex="0 1 500px"  className="tab" flexDirection="column" justifyContent="start" gap="5px">
                <FlexDiv flex="1" width="100%" className="tab__capsule-wrapper" gap="2px">
                    <FlexDiv flex="1" className="tab__capsule tab__capsule--selected" justifyContent="center">Register?</FlexDiv>
                    <FlexDiv flex="1" className="tab__capsule" justifyContent="center">Already Register?</FlexDiv>
                </FlexDiv>
                <FlexDiv flex="1 1 auto" width="100%" className="tab__body" flexDirection="column">
                    <FlexDiv flex="1" width="100%" flexDirection="column" gap="20px">
                        <Input label="EMAIL" type="email" name="email" labelFor="loginEmail" required={true}/>
                        <Input label="PASSWORD" type="password" name="password" labelFor="loginPassword" required={true}/>
                        <Button typeVariant="contained" typeColor="primary">LOG IN</Button>
                        <Button typeVariant="contained" typeColor="secondary">LOG IN</Button>

                        <Button typeVariant="outlined" typeColor="primary">LOG IN</Button>
                        <Button typeVariant="outlined" typeColor="secondary">LOG IN</Button>

                        <Button typeVariant="text" typeColor="primary">LOG IN</Button>

                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}