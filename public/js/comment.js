//allows users to add a comment on a blog post.
const commentFormHandler = async function(event) {
  event.preventDefault();
      const blog_id = document.querySelector('.new-comment-form').dataset.blogid;
  const comment_description = document.querySelector('#comment_description').value.trim();
  if (comment_description) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        comment_description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Comment Added.")
    document.location.reload();
  }
};
//allows users to delete a comment on a blog post.
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('comment-id')) {
    const id = event.target.getAttribute('comment-id');
console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Delete Failed');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);

  document
  .querySelector('.comment_body')
  .addEventListener('click', delButtonHandler);
  


