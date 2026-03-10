const db = require('../models/');
const {
    createResponseSuccess,
    createResponseError,
createResponseMessage }
= require('../helpers/responseHelper');
const validate = require('validate.js');
const { post } = require('../app');


const constraints = {
    title: {
    length: {
        minimum: 2,
        maximum: 100,
        tooShort: "^Titeln måste vara minst %{count} tecken lång",
        tooLong: "^Titeln får inte vara längre än %{count} tecken lång"
    }
    }
};


async function getById(id) {
    try {
        const post = await db.Post.findOne({
    where: { id },
    include: [
    db.user,
    db.Tag,
    {
        model: db.comment,
        include: [db.user]
    }
]
});
      return createResponseSuccess(_formatPost(post));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function getAll() {
    try {
      const allPosts = await db.Post.findAll({
    include: [db.user, db.Tag]
});
        return createResponseSuccess(allPosts.map(post => _formatPost(post)));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function addComment(id, comment) {
        if(!id) {
    return createResponseError(422, `Id är obligatoriskt`);
    }
    try {
        comment.postId = id;
        const newComment = await db.comment.create(comment);
         return createResponseSuccess(newComment);
    }catch (error) {
        return createResponseError(error.status, error.message);
        }
    }



async function create(post) {
    const invalidData = validate(post, constraints);
    if(invalidData) {
    return createResponseError(422, invalidData);
    }
    try {
       const newPost = await db.Post.create(post);
         return createResponseSuccess(newPost);
    }
    catch (error) {
    return createResponseError(error.status, error.message);
    }
    }


async function update(post, id) {
    const invalidData = validate(post, constraints);
    if (!id) {
        return createResponseError(422, `Id är obligatoriskt`);
    }


 if(invalidData) {
        return createResponseError(422, invalidData);
    }
    try {
        await db.Post.update(post, {
            where: {id}    
        });
        return createResponseMessage(200, `Inlägget uppdaterades`);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }


         
    }

async function destroy(id) {
 if (!id) {
    return createResponseError(422, `Id är obligatoriskt`);
    }
    try {   await db.Post
    .destroy({
    where: {id }  
    });
      return createResponseMessage(200, `Inlägget raderades`);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
   
}

function _formatPost(post) {
    const cleanPost = {
        id: post.id,
        title: post.title,
        body: post.body,
        imageUrl: post.imageUrl,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        author: {
            id: post.user.id,
            username: post.user.username,
            email: post.user.email,
            firstName: post.user.firstName,
            lastName: post.user.lastName,
            imageUrl: post.user.imageUrl
        },
        tags: []
    };

    if (post.comments) {
        cleanPost.comments = [];

        post.comments.map((comment) => {
            return cleanPost.comments = [
                {
                    title: comment.title,
                    body: comment.body,
                    author: comment.user.username,
                    createdAt: comment.createdAt
                }, 
                ...cleanPost.comments
            ];
        });
    }

    post.Tags.map((tag) => {
        return (cleanPost.tags = [tag.name, ...cleanPost.tags]);
    });

    return cleanPost;
}

            

            

module.exports = {
    getById,
    getAll,
    create,
    update,
    destroy,
    addComment
}
