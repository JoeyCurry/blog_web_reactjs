class BaseService {

    constructor(dispatch, loadingFun, successFun, failedFun) {
        this._loading = loadingFun;
        this._success = successFun;
        this._failed = failedFun;
        this.dispatch = dispatch;
    }

    //加载中
    loading(){
        if (this._loading) {
            this._loading();
        }
    }

    //请求成功
    success(data){
        if (this._success) {
            this._success(data);
        }
    }

    //请求失败
    failed(msg){
        if (this._failed) {
            this._failed(msg);
        }
        Toast.show(msg);
    }
}

export default BaseService;
