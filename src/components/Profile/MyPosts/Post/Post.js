import Like from "./Like";
import styles from "./Post.module.css";

const Post = (props) => {
    const message = props.message;
    const likeCount = props.likeCount;
    return ( 
        <div className={styles.post}>
            {message}
            <Like likes={likeCount} />
        </div>
     );
}
 
export default Post;