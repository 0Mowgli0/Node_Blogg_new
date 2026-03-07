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

async function getAll() {
    try {
    const allPosts = await db.Post.findAll();
    return createResponseSuccess(allPosts);
    } catch (error) {
        return createResponseError(error.status, error.message);
        }
    }


async function create(post) {
    const invalidData = validate(post, constraints);
if(invalidData) {
    return createResponseError(422, invalidData);
} else {
    try {
       const newPost = await db.Post.create(post);
         return createResponseSuccess(newPost);
    }catch (error) {
        return createResponseError(error.status, error.message);
        }

     
    }
}

function update() {

}

function destroy() {

}

module.exports = {
    getAll,
    create,
    update,
    destroy
}