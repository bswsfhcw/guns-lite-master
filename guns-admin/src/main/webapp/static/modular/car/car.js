/**
 * 汽车管理初始化
 */
var Car = {
    id: "CarTable",
    seItem: null,
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Car.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'ID', field: 'id', visible: true, align: 'center', valign: 'middle'},
        {title: '汽车名字', field: 'carName', visible: true, align: 'center', valign: 'middle'},
        {title: '类型', field: 'carType', visible: true, align: 'center', valign: 'middle'},
        {title: '颜色', field: 'carColor', visible: true, align: 'center', valign: 'middle'},
        {title: '厂商', field: 'manufacturer', visible: true, align: 'center', valign: 'middle'},
    ];
};

/**
 * 检查是否选中
 */
Car.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Car.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加汽车
 */
Car.openAddCar = function () {
    var index = layer.open({
        type: 2,
        title: '添加汽车',
        area: ['85%', '85%'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/car/add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看汽车详情
 */
Car.openCarDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '系统参数详情',
            area: ['85%', '85%'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/car/edit/' + Car.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除汽车
 */
Car.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/car/delete", function (data) {
            Feng.success("删除成功!");
            Car.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("id",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询汽车列表
 */
Car.search = function () {
    var queryData = {};
    queryData['name'] = $("#name").val();
    Car.table.refresh({query: queryData});
};
/**
 * 重置查询条件
 */
Car.reset = function () {
    $('#name').val('');
    this.search();
};

$(function () {
    var defaultColunms = Car.initColumn();
    var table = new BSTable(Car.id, "/car/list", defaultColunms);
    table.setPaginationType("server");
    Car.table = table.init();
});
