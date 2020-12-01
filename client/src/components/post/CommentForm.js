import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
<<<<<<< HEAD
    <div class='post-form'>
      <div class='bg-primary p'>
=======
    <div className='post-form'>
      <div className='bg-primary p'>
>>>>>>> 4c09b065bcb715b553e7ab6f91f0b7eee03a5aee
        <h3>Leave a Comment</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
<<<<<<< HEAD
        class='form my-1'
      >
        <textarea
          name='text'
          cols='30'
=======
        className='form my-1'
      >
        <textarea
          // style='font-family:Times New Roman;color:#003399;white-space:pre-wrap'
          className='textarea'
          name='text'
          cols='60'
>>>>>>> 4c09b065bcb715b553e7ab6f91f0b7eee03a5aee
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          // required
        ></textarea>
<<<<<<< HEAD
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
=======
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
>>>>>>> 4c09b065bcb715b553e7ab6f91f0b7eee03a5aee
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
