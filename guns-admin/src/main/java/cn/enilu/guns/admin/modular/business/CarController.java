package cn.enilu.guns.admin.modular.business;

import cn.enilu.guns.bean.entity.business.Car;
import cn.enilu.guns.service.business.CarService;

import cn.enilu.guns.bean.annotion.core.BussinessLog;
import cn.enilu.guns.bean.constant.factory.PageFactory;
import cn.enilu.guns.bean.dictmap.CommonDict;
import cn.enilu.guns.admin.core.base.controller.BaseController;
import cn.enilu.guns.bean.exception.GunsException;

import cn.enilu.guns.bean.vo.query.Page;
import cn.enilu.guns.bean.vo.query.SearchFilter;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/car")
public class CarController extends BaseController {
	private  Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	private CarService carService;

	private static String PREFIX = "/car/";

	/**
	* 跳转到首页
	*/
	@RequestMapping(value="",method = RequestMethod.GET)
		public String index() {
		return PREFIX + "index.html";
	}

	/**
	* 跳转到添加页面
	*/
	@RequestMapping(value = "/add",method = RequestMethod.GET)
		public String add() {
		return PREFIX + "add.html";
	}

	/**
	* 跳转到修改页面
	*/
	@RequestMapping("/edit/{id}")
	public String edit(@PathVariable Long id, Model model) {
		Car entity = carService.get(id);
		model.addAttribute("item",entity);
		return PREFIX + "edit.html";
	}
	@RequestMapping(value = "/list",method = RequestMethod.POST)
	@ResponseBody
	public Object list(@RequestParam(required = false) String name) {
		Page<Car> page = new PageFactory<Car>().defaultPage();
		page.addFilter("name", SearchFilter.Operator.EQ,name);
		page = carService.queryPage(page);
		return super.packForBT(page);
	}
	/**
	* 新增汽车
	*/
	@RequestMapping(value = "/add",method = RequestMethod.POST)
	@ResponseBody
	@BussinessLog(value = "新增汽车", key = "name",dict= CommonDict.class)
	public Object add(Car car) {
		carService.insert(car);
		return SUCCESS_TIP;
	}

	/**
	* 删除汽车
	*/
	@RequestMapping(value = "/delete")
	@ResponseBody
	@BussinessLog(value = "删除汽车", key = "id",dict= CommonDict.class)
	public Object delete(@RequestParam Long id) {
		carService.delete(id);
		return SUCCESS_TIP;
	}

	/**
	* 修改汽车
	*/
	@RequestMapping(value = "/update")
	@ResponseBody
	@BussinessLog(value = "修改汽车", key = "name",dict= CommonDict.class)
	public Object update(Car car) {
		carService.update(car);
		return SUCCESS_TIP;
	}

}