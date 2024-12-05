import { IoniconName } from "../../components/UI/input";

export interface LoginProps{
    name: string;
    placeholder: string;
    type: string;
    label: string;
    icon: IoniconName;
}

export interface RegisterProps{
    name: string;
    placeholder: string;
    type: string;
    label: string;
    icon: IoniconName;
}

export class LoginModel implements LoginProps{
    name: string;
    placeholder: string;
    type: string;  
    label: string;  
    icon: IoniconName;  
    
    constructor(
        name: string,
        placeholder: string,
        type: string,
        label: string,
        icon: IoniconName,
    ){
        this.name= name;
        this.placeholder= placeholder;
        this.type= type;
        this.label= label;
        this.icon= icon;
    }
}

export class RegisterModel implements RegisterProps{
    name: string;
    placeholder: string;
    type: string;  
    label: string;  
    icon: IoniconName;  
    
    constructor(
        name: string,
        placeholder: string,
        type: string,
        label: string,
        icon: IoniconName,
    ){
        this.name= name;
        this.placeholder= placeholder;
        this.type= type;
        this.label= label;
        this.icon= icon;
    }
}