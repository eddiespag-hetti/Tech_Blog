console.log('aaaaaa');

document.getElementById('comment-btn').addEventListener('click', async (event) => {
    event.preventDefault();
    let description = document.getElementById('comment-input').value.trim()
  const blog_id = document.querySelector('h2').id;
  

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ description, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
    

    if(response.ok) {
        console.log('okay');
    } else {
console.log('error');
    }
});