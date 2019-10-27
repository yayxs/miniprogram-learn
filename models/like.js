import { HTTP } from '../util/http';

class LikeModel extends HTTP {
  like(flag, art_id, category) {
    let url = flag == `like` ? `like` : `like/cancel`;
    this.request({
      url,
      method: 'POST',
      data: {
        art_id,
        type: category
      }
    });
  }
  getClassicLikeStatus(art_id, category, scallback) {
    this.request({
      url: `classic/${category}/${art_id}/favor`,
      success: scallback
    });
  }
}

export { LikeModel };
