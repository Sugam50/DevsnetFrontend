function Template({setMeme,template}) {
    return(
            <img className="imagememe" onClick={()=>{
                setMeme(template)
            }} style={{backgroundImage:`url(${template.url})`}} alt=''></img>
    )
    
}

export default Template;