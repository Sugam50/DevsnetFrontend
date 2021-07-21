import { useState,useCallback } from "react";

const useImage=(Initial)=>{
    const [state,setState]=useState(Initial)
    
    const getImage=useCallback((setImage)=>

        setState(`https://source.unsplash.com/720x480/?${setImage}`)

    ,[]);

    return [state,getImage]
}

export default useImage;