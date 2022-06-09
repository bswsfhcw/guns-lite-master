package cn.enilu.guns.service.business;


import cn.enilu.guns.bean.entity.business.Cat;
import cn.enilu.guns.dao.business.CatRepository;

import cn.enilu.guns.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CatService extends BaseService<Cat,Long,CatRepository>  {
    private Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private CatRepository catRepository;

}

