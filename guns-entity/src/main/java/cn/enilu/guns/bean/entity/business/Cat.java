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
@Entity(name="cat")
@Table(appliesTo = "cat",comment = "猫")
@Data
@EntityListeners(AuditingEntityListener.class)
public class Cat extends BaseEntity {

    @Column(name = "cat_name",columnDefinition = "VARCHAR(512) COMMENT '猫名字'")
    private String catName;
    @Column(name = "cat_type",columnDefinition = "VARCHAR(8) COMMENT '类型品种'")
    private String catType;
    @Column(name = "cat_color",columnDefinition = "VARCHAR(256) COMMENT '颜色'")
    private String catColor;
    @Column(name = "cat_price",columnDefinition = "DECIMAL(20,2) COMMENT '价格'")
    private String catPrice;
}
