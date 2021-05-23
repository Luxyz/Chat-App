import React from 'react';

import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'

import { IconButton } from '@material-ui/core'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import './Input.css';

const Input = ({ message, setMessage, sendMessage, open, handleSetEmojis, addEmoji }) => (
  <form className="form">
    <IconButton onClick={handleSetEmojis} >
      <SentimentSatisfiedOutlinedIcon fontSize='medium' />
      {open ? 
        <Picker set="apple"
          className='openEmoji' 
          onSelect={addEmoji}
          autoFocus={open}
          style={{position:'absolute', width :'300px', left: '1%', bottom: '121%'}} 
        /> 
      : null}
    </IconButton>
    <input
      className="input"
      type="text"
      placeholder="Digite uma mensagem..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button 
      className="sendButton" 
      onClick={(event) => sendMessage(event)}>Enviar</button>
  </form>
)

export default Input;