package cn.enilu.guns.bean.entity.business;

import cn.enilu.guns.bean.entity.BaseEntity;
import lombok.Data;
import org.hibernate.annotations.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;

/**
 * Created  on 2018/4/2 0002.
 *
 * @author enilu
 */
@Entity(name="car")
@Table(appliesTo = "car",comment = "汽车")
@Data
@EntityListeners(AuditingEntityListener.class)
public class Car extends BaseEntity {

    @Column(name = "car_name",columnDefinition = "VARCHAR(512) COMMENT '汽车名字'")
    private String carName;
    @Column(name = "car_type",columnDefinition = "BIGINT COMMENT '类型'")
    private String carType;
    @Column(name = "car_color",columnDefinition = "VARCHAR(256) COMMENT '颜色'")
    private String carColor;
    @Column(name = "car_price",columnDefinition = "DECIMAL(20,2) COMMENT '价格'")
    private String carPrice;
    @Column(name = "manufacturer",columnDefinition = "VARCHAR(256) COMMENT '厂商'")
    private String manufacturer;
}
