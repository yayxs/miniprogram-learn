import {
  HTTP
} from '../util/http';

class ClassicModel extends HTTP {
  getLatest(scallback) {
    this.request({
      url: `classic/latest`,
      success: res => {
        scallback(res);
      }
    });
  }

  getPre(scallback,index) {
    this.request({
      url: `classic/${index}/previous`,     
      success: res => {
        scallback(res);
      }
    });
  }
}
export {
  ClassicModel
};