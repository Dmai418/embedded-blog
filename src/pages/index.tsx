import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/c-language/basics">
            开始学习 →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, icon, link, desc}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card card--full-height">
        <div className="card__body">
          <div style={{fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>{icon}</div>
          <Heading as="h3" style={{textAlign: 'center'}}>{title}</Heading>
          <p style={{textAlign: 'center', color: 'var(--ifm-color-gray-700)'}}>{desc}</p>
        </div>
        <div className="card__footer" style={{textAlign: 'center'}}>
          <Link className="button button--primary button--sm" to={link}>进入 →</Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main style={{padding: '3rem 0'}}>
        <div className="container">
          <div className="row">
            <FeatureCard title="C语言基础" icon="💻" link="/docs/c-language/basics" 
              desc="指针、结构体、位运算 - 嵌入式开发的基石" />
            <FeatureCard title="STM32入门" icon="🔧" link="/docs/stm32/intro"
              desc="GPIO、定时器、串口、ADC - 从点灯开始" />
            <FeatureCard title="FreeRTOS" icon="⚡" link="/docs/freertos/intro"
              desc="多任务、队列、信号量 - 实时操作系统" />
          </div>
          <div className="row" style={{marginTop: '1rem'}}>
            <FeatureCard title="项目实战" icon="🚀" link="/docs/projects/projects"
              desc="动手做项目，在实践中学习" />
            <FeatureCard title="博客" icon="📝" link="/blog"
              desc="学习日志、踩坑记录、经验分享" />
            <FeatureCard title="GitHub" icon="🔗" link="https://github.com/your-username/embedded-blog"
              desc="源码在这里，欢迎 Star" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
