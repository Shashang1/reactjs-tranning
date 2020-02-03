import React from 'react';
import { useParams } from 'react-router-dom'
import filterEmoji from './filterEmoji';
import CopyToClipboard from 'react-copy-to-clipboard'

export const Emoji = () =>{
  const {title} = useParams();
  const data = filterEmoji(title,1)[0];
  const codePointHex = data.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <div className="output">
      <center>
        <img alt="emoji" src={src} height="50%" width="50%" className="mx-auto d-block"/>
        <span className="res-title">{data.title}</span><br/>
        <span className="res-title">{data.keywords}</span><br/>
        <CopyToClipboard text={data.symbol}>
        <button className="btn btn-success" onClick={(e)=>{e.target.innerHTML="Copied"}}>Copy to clipboard</button>
        </CopyToClipboard>
      </center>
    </div>
  )
} 