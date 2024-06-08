import Post from "@/components/Post";

async function getPostsfromUrl(id){
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const data = await res.json();
    return data.data;
}

const PostsPage = async ({params}) => {
    const posts = await getPostsfromUrl(params.id)
    return (
        <>
          <div>
            <Post id={posts.id} title={posts.title} body={posts.body}/>
          </div>
        </>
      );
}

export default PostsPage