class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('follow-state'); 
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'unfollowed') {
      this.$el.text('Follow!');
    } else { 
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    // let this = this;
    this.$el.click(function(e) {
      e.preventDefault();
      debugger
      if (this.followState === 'unfollowed') {
        return $.ajax({
          url: `/users/${this.userId}/follow`,
          method: 'POST'
        });
      } else {
        return $.ajax({
          url: `/users/${this.userId}/follow`,
          method: 'DELETE'
        });
      }
    }).bind(this);
    this.render();
  }
}
// @follow = current_user.out_follows.find_by(followee_id: params[: user_id])
module.exports = FollowToggle;