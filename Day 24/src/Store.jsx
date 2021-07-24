import * as React from 'react';

const LoginContext= React.createContext();

function LoginReducer(
    state=
    {loginstate:"login"}
,action
)
{
    switch(action.type){
        case "login":{
            
            return {...state,loginstate:action.value};
            
        }

        default:{
            throw new Error(`Unhandled Excepion Error ${action.type}`);
        }
    }
}

function LoginProvider({children}){
    const [state,dispatch]=React.useReducer(LoginReducer,
        {
            loginstate:"login"
        }
        );

    const value = {state,dispatch};

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    )

}

export {LoginProvider,LoginReducer,LoginContext};