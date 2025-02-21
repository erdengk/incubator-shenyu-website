import React from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

import clsx from "clsx";
import styles from "./index.module.css";
import Features from "../components/Features";

function Home() {
  const {
    siteConfig: {
      customFields: { description },
      tagline,
    },
  } = useDocusaurusContext();
  return (
    <Layout title={tagline} description={description as string}>
      <main>
        <div className={styles.hero}>
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col col--5  col--offset-1">
              <h1 className={styles.heroProjectTitle}>
                <img
                  src="/img/logo-light.svg"
                  className={styles.heroProjectLogo}
                ></img>
                <span className={styles.heroProjectSubTitle}>Incubating</span>
              </h1>
              <h3 className={styles.heroProjectTagline}>
                <span
                  className={styles.heroTitleTextHtml}
                  dangerouslySetInnerHTML={{
                    __html: translate({
                      id: "homepage.hero.title",
                      message:
                        "High-performance,<b>multi-protocol</b>,extensible,<b>responsive</b> API Gateway",
                      description:
                        "Home page hero title, can contain simple html tags",
                    }),
                  }}
                />
              </h3>
              <span
                className={styles.heroDesc}
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: "homepage.hero.desc",
                    message:
                      "Compatible with a variety of mainstream framework systems, support hot plug, users can customize the development, meet the current situation and future needs of users in a variety of scenarios, experienced the temper of large-scale scenes",
                    description:
                      "Home page hero title, can contain simple html tags",
                  }),
                }}
              />
              <div className={styles.indexCtas}>
                <Link className="button button--primary" to="/docs/index">
                  <Translate>Get Started</Translate>
                </Link>
                <Link
                  className="button button--info"
                  to="https://github.com/apache/incubator-shenyu"
                >
                  <Translate>Github</Translate>
                </Link>
              </div>
            </div>
            <div className="col col--5 ">
              <img
                alt={translate({ message: "Docusaurus with Keytar" })}
                className={styles.heroLogo}
                src={useBaseUrl("/img/architecture/shenyu-framework.png")}
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl("/img/home/open.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Open</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    The technology stack is fully open source construction,
                    maintain the community neutrality, compatible with the
                    community open source ecology, welcome to participate in
                    various contributions at any time.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/home/high-performance.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>High-Performance</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    High-performance micro-service API gateway, experienced the
                    temper of large-scale scenes.Dynamic flow configuration,
                    high performance, gateway consumption is 1~2ms.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/home/plugins.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Pluggable</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Plug-in design idea, plug-in hot plug, easy to
                    expand.Built-in rich plugin support, authentication,
                    limiting, fuse, firewall, etc.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <Features />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
