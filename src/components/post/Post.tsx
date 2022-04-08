import Avatar from "@material-ui/core/Avatar";
import "./Post.css";

const Post = ({
  username,
  caption,
  imageUrl,
}: {
  username: string;
  caption: string;
  imageUrl: string;
}) => {
  return (
    <div className='post'>
      {/* Header: avatar with username */}
      <div className='post-header'>
        <Avatar className='post-avatar' alt={username} src='/static/1.jpg' />
        <h3></h3>
      </div>
      {/* Post image */}
      <img src={imageUrl} alt='' className='post-image' />
      {/* Username and caption */}
      <h4 className='post-text'>
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
