package cn.enilu.guns.service.business;


import cn.enilu.guns.bean.entity.business.Car;
import cn.enilu.guns.dao.business.CarRepository;

import cn.enilu.guns.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService extends BaseService<Car,Long,CarRepository>  {
    private Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private CarRepository carRepository;

}

