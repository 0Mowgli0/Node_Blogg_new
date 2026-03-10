const db = require('../models/');
const {
    createResponseSuccess,
    createResponseError,
createResponseMessage }
= require('../helpers/responseHelper');
const validate = require('validate.js');


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
        const allPosts = await db.Post.findOne({
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
      return createResponseSuccess(allPosts);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function getAll() {
    try {
      const allPosts = await db.Post.findAll({
    include: [db.user, db.Tag]
});
        return createResponseSuccess(allPosts);
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


module.exports = {
    getById,
    getAll,
    create,
    update,
    destroy,
    addComment
}
