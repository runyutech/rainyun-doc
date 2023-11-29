import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '快速上手',
    img: "img/img2.png",
    description: (
      <>
          精心自研系统，抛开复杂模板
          一键式操作，为您带来更易用的体验（雨云CMS v3.8.0）
      </>
    ),
  },
  {
    title: '长期稳定',
      img: "img/img_1.png",
      description: (
      <>
          五年运营经验，超过30,000个网站在雨云运行
          我们一直在为客户提供稳定长久的服务
      </>
    ),
  },
  {
    title: '知识社区',
      img: "img/img_2.png",
    description: (
      <>
          我们提供各种疑难教程，欢迎加入雨云（9000人社区）
          共同交流，完善雨云百科知识库。
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt=""/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
