document.getElementById('comment-btn').addEventListener('click', function() {
    document.getElementById('comment-box').style.display = 'block';
  });
  
  document.getElementById('submit-comment').addEventListener('click', async function() {
    const comment = document.getElementById('comment-text').value;
  
    // Check if the comment is not empty
    if (comment.trim() !== '') {
      // Send the comment data to the server using a POST request
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment: comment })
        });
  
        if (response.ok) {
          // Optionally, you can handle the successful addition of the comment here
          console.log('Comment added successfully!');
          // Hide the comment box after submission
          document.getElementById('comment-box').style.display = 'none';
          // Optionally, you can reload the page to see the updated comments
          // window.location.reload();
        } else {
          // Handle error if the comment couldn't be added
          console.error('Failed to add comment');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
      }
    } else {
      // Display an error message if the comment is empty
      alert('Please enter a comment before submitting');
    }
  });
  