import PostNavBtn from "@/components/PostNavBtn";
import Post from "@/components/Post";

export async function getPosts() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch posts: ", error);
  }
}

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      {
        posts.map((post)=>{
          return(
            <div className=" my-5 border-red-500 border flex flex-col gap-3" key={post.id}>
            <Post id={post.id} title={post.title} body={post.body}/>
          </div>
          )
        })
      }
    </>
  );
};

export default Posts;
