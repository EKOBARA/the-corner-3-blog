import React from 'react';

const Article = () => {
    return (
        <div>
            <form>
                <label htmlFor="title">
                    title
                </label>
                <input type="text" id='title'/>
                <label htmlFor="author">
                    Author
                </label>
                <input type="text" id='author' />
                <input type="text-box" />
            </form>
        </div>
    );
};

export default Article;