import React from 'react';
import uuid from 'node-uuid';
import Note from './Note.jsx';



export default class Notes extends React.Component {
  constructor(props){
    super(props);
    this.state={
      notes : [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes=this.state.notes;
    return (
        <ul className='notes'>{notes.map(this.renderNote)}</ul>
      );
  }
  renderNote(note) {
    return (
      <li  className='note' key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }

}