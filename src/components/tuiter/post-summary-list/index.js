import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json"

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group">
                {
                    posts.map(p => {
                        return(
                            <PostSummaryItem post={p}/>
                        );
                    })
                }
            </ul>
        </>
    );
}
export default PostSummaryList;
