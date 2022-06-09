/**
 * 猫管理初始化
 */
var Cat = {
    id: "CatTable",
    seItem: null,
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Cat.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'ID', field: 'id', visible: true, align: 'center', valign: 'middle'},
        {title: '猫名字', field: 'catName', visible: true, align: 'center', valign: 'middle'},
        {title: '类型品种', field: 'catType', visible: true, align: 'center', valign: 'middle'},
        {title: '颜色', field: 'catColor', visible: true, align: 'center', valign: 'middle'},
    ];
};

/**
 * 检查是否选中
 */
Cat.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Cat.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加猫
 */
Cat.openAddCat = function () {
    var index = layer.open({
        type: 2,
        title: '添加猫',
        area: ['85%', '85%'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cat/add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看猫详情
 */
Cat.openCatDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '系统参数详情',
            area: ['85%', '85%'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cat/edit/' + Cat.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除猫
 */
Cat.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cat/delete", function (data) {
            Feng.success("删除成功!");
            Cat.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("id",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询猫列表
 */
Cat.search = function () {
    var queryData = {};
    queryData['name'] = $("#name").val();
    Cat.table.refresh({query: queryData});
};
/**
 * 重置查询条件
 */
Cat.reset = function () {
    $('#name').val('');
    this.search();
};

$(function () {
    var defaultColunms = Cat.initColumn();
    var table = new BSTable(Cat.id, "/cat/list", defaultColunms);
    table.setPaginationType("server");
    Cat.table = table.init();
});
