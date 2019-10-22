import {
    HTTP
} from '../util/http';

class LikeModel extends HTTP {
    like(flag, art_id, category) {
        let url = flag == `like` ? `like` : `like/cancel`
        this.request({
            url,
            method: "POST",
            data: {
                art_id,
                type: category
            }
        });
    }
}
export {
    LikeModel
};