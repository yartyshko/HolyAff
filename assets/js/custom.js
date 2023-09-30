'use strict'
document.addEventListener('DOMContentLoaded', function() {
    initCommentFeature();
});

function initCommentFeature() {
    const openNewComment  = document.querySelector('#open-new-comment');
    const blockNewComment  = document.querySelector('#new-comment');
    const addBtnNewComment  = document.querySelector('#add-new-comment');
    const textareaNewComment  = document.querySelector('#new-comment-textarea');

    openNewComment.addEventListener('click', function () {
	    blockNewComment.classList.toggle('d-none');
    });

    addBtnNewComment.addEventListener('click', function () {
        let textareaValue = textareaNewComment.value
	    if(textareaValue) {
            blockNewComment.after(getCommentElement(textareaValue));
        }
    });
}

function getCommentElement(value) {
    const template = document.getElementById('comment-template');
    const templateContent = template.content.cloneNode(true);
    templateContent.querySelector('.comment-text').append(value);

    return templateContent;
}