const PostSummaryItem = (post) => {
    return(`
        <div class="wd-box row">
            <div class="col-8 col-sm-9 col-xl-10">
                <div class="wd-topic">
                    ${post.topic}
                </div>
                <span class="wd-title">
                    ${post.userName} <i class="fa fa-check-circle"></i>
                </span>
                <span class="wd-topic">
                    - ${post.time}
                </span>
                <div class="wd-title">
                    ${post.title}
                </div>
            </div>
            <div class="col-2">
                <img src=${post.image} class="wd-rounded-image"/>
            </div>
        </div>
    `);
}
export default PostSummaryItem;