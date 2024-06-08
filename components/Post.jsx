import PostNavBtn from "./PostNavBtn"


const Post = ({title,body,id}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <PostNavBtn id={id}/>
    </div>
  )
}

export default Post