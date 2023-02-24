import React from 'react';
import data from '../context/data.json';
import { PostContext, type PostType, Posts } from '../context/postsContext';
import PostCard from '../components/PostCard';

const Sync = () => {
    const { posts, setPosts } = React.useContext(PostContext) as PostType;

    React.useEffect(() => {
        const classedData = data.map((post: any) => {
            return new Posts(post.id, post.title, post.author, post.duration, post.src);
        });
        setPosts(classedData);
    }, []);

    return (
        <div className="flex justify-center py-20 w-full bg-gray-100 dark:bg-gray-900">
            <div className="grid grid-cols-4 gap-6">
                {posts.map((post: Posts) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        duration={post.duration}
                        src={post.src}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sync;