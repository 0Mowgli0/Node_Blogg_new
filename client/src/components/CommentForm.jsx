function CommentForm() {
    return ( 
    <form>
    <div> Title: <input type="text" />
    </div>
    <div> Inehåll <textarea rows= "5"> </textarea>
    </div>
    <button>Skicka kommentar</button>
    </form>

    );
}


export default CommentForm;