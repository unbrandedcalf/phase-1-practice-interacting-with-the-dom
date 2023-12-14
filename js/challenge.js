document.addEventListener('DOMContentLoaded', () => {
    console.log ("it worked")

const counterElement = document.getElementById('counter')
let timer = 0
counterElement.textContent = timer
setInterval(() => {
    if (!paused) {
        timer++
        counterElement.textContent = timer
    } 
}, 1000)

const minusElement = document.getElementById('minus')
minusElement.addEventListener('click', () => {
    timer--
    counterElement.textContent = timer 
})

const plusElement = document.getElementById('plus')
plusElement.addEventListener('click', () => {
    timer++
    counterElement.textContent = timer
})

let likes = {}
const heartElement = document.getElementById('heart')
heartElement.addEventListener('click', () => {
    if (!likes[timer]) {
        likes[timer] = 1
      } else {
        likes[timer]++
      }
      renderLikes()
    })
function renderLikes() {
    const likesContainer = document.querySelector('.likes');
    const likesElement = document.createElement('ul');
    
    likesElement.id = 'likes'

    likesContainer.innerHTML = ''

    likesContainer.appendChild(likesElement)
    
    for (const num in likes) {
        const likeItem = document.createElement('li');
        likeItem.textContent = `Number ${num}: ${likes[num]} likes`;
        console.log('Jett')
        likesElement.appendChild(likeItem);
    }
}

const pauseElement = document.getElementById('pause')
let paused = false
pauseElement.addEventListener('click', () => {
counterElement.textContent = timer
togglePause()
if (paused) {
    pauseElement.textContent = 'Resume';
  } else {
    pauseElement.textContent = 'Pause';
  }
})
function togglePause() {
    paused = !paused
    minusElement.disabled = paused
    plusElement.disabled = paused
    heartElement.disabled = paused
}  

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
    
    const commentInput = document.getElementById('comment-input').value;

    const commentDiv = document.createElement('div');
    commentDiv.textContent = commentInput;

    const commentsSection = document.getElementById('list');
    commentsSection.appendChild(commentDiv)

    document.getElementById('comment-form').reset()
})

})
   

