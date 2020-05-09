import React from 'react';

function CommentForm(props) {
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Invoke the passed in event callback
    props.onSubmit({ body: body });

    // Clear the input field
    setBody('');
  };

  let archivedCommentView = props.post.status === 'ARCHIVED';
  const commentFormDiv = (
    <div className='card-body'>
      <h4 className='card-title'>Comment down below </h4>
      <div>
        <div className='form-group'>
          <textarea
            className='form-control'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' onClick={handleSubmit}>
            Comment
          </button>
        </div>
      </div>
    </div>
  );
  return <div className='card'>{archivedCommentView || commentFormDiv}</div>;
}

export default CommentForm;
