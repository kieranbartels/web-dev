import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
             ${
                post.map(item => {
                    return(PostSummaryItem(item));
                }).join("")
             }
            </ul>
    `);
}
export default WhoToFollowList;
