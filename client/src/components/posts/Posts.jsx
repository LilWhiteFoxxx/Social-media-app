import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';
import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
    const { isPending, error, data } = useQuery({
      queryKey: ['posts'],
      queryFn: () =>
        makeRequest.get('/posts').then((res) => {
          return res.data;
        })
    })

    return (
        <div className="posts">
            {error ? "Something went wrong" :(isPending ? "Loading ..." : data.map((post) => (
                <Post post={post} key={post.id} />
            )))}
        </div>
    );
};

export default Posts;
