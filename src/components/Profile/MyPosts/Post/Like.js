const Like = (props) => {
    let likes = props.likes;
    return (
      <div className="likes-wraper">
        <span className="likes-count">{likes}</span>{" "}
        <i className="fa-solid fa-thumbs-up"></i>
      </div>
    );
}
 
export default Like;