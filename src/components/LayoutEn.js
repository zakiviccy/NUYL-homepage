import * as React from "react";
import ScrollButton from "./scrollToTop";
// import { Link, withPrefix } from "gatsby"
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import Footer from "./FooterEn";
import Navbar from "./NavbarEn";
import "./all.sass";
// import "./bulma.min.css";
// import "./ghost-blog.css";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description, lang } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix("/")}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-16x16.png`} sizes="16x16" />

        <link rel="mask-icon" href={`${withPrefix("/")}img/safari-pinned-tab.svg`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <Navbar />
      <div className="hero is-medium">{children}</div>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
