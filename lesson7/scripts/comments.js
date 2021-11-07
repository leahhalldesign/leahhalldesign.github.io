function store(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
function readStore(key) {
    console.log('readFromLS initialized');
    return JSON.parse(window.localStorage.getItem(key));
}

class commentModel {
    constructor(type) {
        this.type = type;
        this.comments = readStore(this.type) || [];
    }

    filterCommentsByName(name) {
        const filteredArray = getAllComments().filter(item => item.name == name);
        return filteredArray;
    }
    getComments(category = null){
        console.log('model getComments initialized');
        if (category === null){
            console.log(`category null`)
            return this.comments;
        } else {
            console.log(`category ${category}`)
            return this.comments.filter(item => item.name == category);
        }
    }
    addComment(postName, userInput){
        console.log(`addComment initialized`);
        const newComment = {
            name: postName,
            date: new Date(),
            comment: userInput
        }
        this.comments.push(newComment);
        store(this.type, this.comments);
    }
}

const commentForm = `
    <h3>Comments</h3>
    <div class="comment_form">
        <h4>Add a Comment</h4>
        <textarea id="user_comment" placeholder="Enter your comments here"></textarea>
        <br />
        <button id="comment_submit">Add Comment</button>
    </div>
    <ul class="comment_list" id="commentList"></ul>`;

function formatDate(dateObject){
    dateObject = new Date(dateObject);
    const year = dateObject.getFullYear();
    const date = dateObject.getDate();
    const monthsArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    const month = monthsArr[dateObject.getMonth()];
    const daysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = daysArr[dateObject.getDay()];
    const time = `${dateObject.getHours()}:${dateObject.getMinutes()}`;
    const dateFormatted = `${day}, ${month} ${date}, ${year} ${time}`;
    return dateFormatted;
}

function renderCommentList(parent, commentArray){
    console.log('renderCommentList initialized');
    parent.innerHTML = '';
    commentArray.forEach(commObject => {
        let item = document.createElement('li');
        item.innerHTML = `
            <h5>${formatDate(commObject.date)} &mdash; ${commObject.name}</h5>
            <p class="comm-notes">${commObject.comment}</p>`; 
        parent.appendChild(item);
    });
}

export default class Comments {
    constructor(type, commentElementID) {
        this.type = type;
        this.commentElementID = commentElementID;
        this.model = new commentModel(this.type);
    }
    addSubmitListener(commentName) {
        console.log(`addSubmitListener initialized with ${commentName}`)
        let userComment = document.getElementById('user_comment');
        console.log(userComment);
        document.getElementById('comment_submit').onclick = () => {
            this.model.addComment(commentName, userComment.value);
            userComment.value = '';
            this.showCommentList(commentName);
        }
    }
    showCommentList(category = null) {
        console.log('showCommentList initialized');
        const parent = document.getElementById('comments_div');
        if(parent.innerHTML === '') {
            parent.innerHTML = commentForm;
        }
        if(category !== null) {
            document.querySelector('.comment_form').style.display = 'block';
            this.addSubmitListener(category);
        } else {
            document.querySelector('.comment_form').style.display = 'none';
        }
        let commentArr = this.model.getComments(category);
        console.log(commentArr);
        renderCommentList(parent.lastChild,commentArr);
    }
}