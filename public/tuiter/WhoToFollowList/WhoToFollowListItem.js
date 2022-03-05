const WhoToFollowListItem = (who) => {
    return(`
        <div class="wd-box-follow row me-1">
            <div class="col-2">
                <image src=${who.avatarIcon} class="wd-profile-picture"/>
            </div>
            <div class="col-6 col-xl-7">
                <span>${who.userName} <i class="fa fa-check-circle"></i></span></br>
                ${who.handle}
            </div>
            <div class="col-2 align-self-center">
                <button class="btn btn-primary override-bs">
                    Follow
                </button>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;