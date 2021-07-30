const initialState={
    type:"Get_UserDetails",
    obj:{
        FName:"Enter Name",
        Uname:"Enter Username",
        Mail:"Enter Email",
        Pass:"Enter Password"
    }

}

const UserReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Get_UserDetails":
           
            return {
                ...state,
                obj:action.obj
            };
            
        default :
            return state;
            
    }
}

export default UserReducer;