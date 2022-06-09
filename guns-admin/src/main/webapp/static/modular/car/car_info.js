/**
 * 初始化系统参数详情对话框
 */
var CarInfoDlg = {
    carInfoData : {}
};

/**
 * 清除数据
 */
CarInfoDlg.clearData = function() {
    this.carInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CarInfoDlg.set = function(key, val) {
    this.carInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CarInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CarInfoDlg.close = function() {
    parent.layer.close(window.parent.Car.layerIndex);
}

/**
 * 收集数据
 */
CarInfoDlg.collectData = function() {
    this
        .set('id')
        .set('carName')
        .set('carType')
        .set('carColor')
        .set('manufacturer')
    ;
}

/**
 * 提交添加
 */
CarInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/car/add", function(data){
        Feng.success("添加成功!");
        window.parent.Car.table.refresh();
        CarInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.carInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CarInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/car/update", function(data){
        Feng.success("修改成功!");
        window.parent.Car.table.refresh();
        CarInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.carInfoData);
    ajax.start();
}

$(function() {

});
