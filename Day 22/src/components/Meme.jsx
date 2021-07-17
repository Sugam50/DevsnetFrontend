import { Input, Button } from '@material-ui/core';
import { useState } from 'react';

function Meme({ memes, setMeme }) {
   
    const [form, setForm] = useState({
        template_id:memes.id,
        username:"Cypher50",
        password:"Sugam@123",
        boxes:[],
        
    });
    
    async function generateMeme() {
        var url_api = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((el,i) =>
            url_api += `&boxes[${i}][text]=${el.text}`
        )
        const respo = await fetch(url_api)
            .then(res => res.json())
            .then(data => data.data.url)
        console.log(respo)
        setMeme({ ...memes, url: respo })
    }
    return (
        <div className="meme">
            <img className="imgselected" style={{ backgroundImage: `url(${memes.url})` }} alt=""></img>

            <div className="inputs">
                {
                    [...Array(memes.box_count)].map((_, index) =>
                        <Input key={index} placeholder={`Meme input ${index + 1}`} color="secondary" onChange={(e) => {
                            var nboxes=form.boxes;
                            nboxes[index]={text:e.target.value}
                            setForm({...form,boxes:nboxes})
                        }}>
                        </Input>)
                }
            </div>

            <div className="btns">
                <Button variant="contained" color="inherit" onClick={generateMeme}>Generate Meme</Button>
                <Button variant="contained" color="inherit" onClick={() => {
                    setMeme(null)
                }}>Get Templates</Button>
            </div>
        </div>
    )
}
export default Meme;