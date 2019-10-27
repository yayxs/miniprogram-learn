import { HTTP } from '../util/http';

class ClassicModel extends HTTP {
  getLatest(scallback) {
    this.request({
      url: `classic/latest`,
      success: res => {
        scallback(res);
        this._setLatestIndex(res.index);
        let key = this._getKey(res.index);
        wx.setStorageSync(key, res);
      }
    });
  }
  /**
   * 获取期刊
   */
  getClassic(index, nextOrPre, scallback) {
    // 缓存思路 缓存中或者API中取
    let key =
      nextOrPre == `next` ? this._getKey(index + 1) : this._getKey(index - 1);

    let classic = wx.getStorageSync(key);
    if (!classic) {
      this.request({
        url: `classic/${index}/${nextOrPre}`,
        success: res => {
          wx.setStorageSync(this._getKey(res.index), res);
          scallback(res);
        }
      });
    } else {
      scallback(classic);
    }
  }

  isFirst(index) {
    return index == 1 ? true : false;
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex();
    console.log(latestIndex);
    return latestIndex == index ? true : false;
  }
  _setLatestIndex(index) {
    console.log(index);
    wx.setStorageSync('latest', index);
  }

  _getLatestIndex() {
    const index = wx.getStorageSync('latest');
    return index;
  }
  /**
   * 获取key
   */
  _getKey(index) {
    let key = `classic-${index}`;
    return key;
  }
}
export { ClassicModel };
