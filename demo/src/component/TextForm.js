import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function TextForm(props) {
    const [text, changeText] = useState(0)
    const Newtext = () => { 
         let newtext = text.toUpperCase();
       changeText(newtext)
    }
   const changeHanddle = (event) => { 
       changeText(event.target.value)
       console.log(text);
    }
  return (
    
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example change text</Form.Label>
        <Form.Control  value={text} onChange={changeHanddle} as="textarea" rows={3} />
      </Form.Group>

      
      <Button variant="primary" onClick={Newtext} type="button">
        convert text
      </Button>
    </Form>
   
  )
}
