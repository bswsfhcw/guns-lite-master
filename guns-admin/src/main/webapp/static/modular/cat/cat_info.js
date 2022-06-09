/**
 * 初始化系统参数详情对话框
 */
var CatInfoDlg = {
    catInfoData : {}
};

/**
 * 清除数据
 */
CatInfoDlg.clearData = function() {
    this.catInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CatInfoDlg.set = function(key, val) {
    this.catInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CatInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CatInfoDlg.close = function() {
    parent.layer.close(window.parent.Cat.layerIndex);
}

/**
 * 收集数据
 */
CatInfoDlg.collectData = function() {
    this
        .set('id')
        .set('catName')
        .set('catType')
        .set('catColor')
    ;
}

/**
 * 提交添加
 */
CatInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cat/add", function(data){
        Feng.success("添加成功!");
        window.parent.Cat.table.refresh();
        CatInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.catInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CatInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cat/update", function(data){
        Feng.success("修改成功!");
        window.parent.Cat.table.refresh();
        CatInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.catInfoData);
    ajax.start();
}

$(function() {

});
