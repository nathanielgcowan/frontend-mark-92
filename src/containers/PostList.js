import React, { Component } from 'react';
import PostCard from '../components/PostCard';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({ posts: data }));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div>
                <PostCard title={post.title} />
            </div>
        ));
        return (
            <div>
                { postItems }
            </div>
        )
    }
}

export default Post;