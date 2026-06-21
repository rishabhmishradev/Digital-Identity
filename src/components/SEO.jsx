import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, image }) {
  const defaultTitle = "Webstrom Tech — We Build Your Digital Identity";
  const defaultDescription = "Webstrom Tech is a premium web development and digital solutions agency founded by Rishabh Mishra, specializing in custom portfolio websites, business websites, SaaS platforms, e-commerce stores, AI automation, SEO optimization, digital marketing, dedicated tech partnership, IT outsourcing, and startup MVP development.";
  const defaultImage = "https://webstrom.site/og-image.png";

  const seoTitle = title ? `${title} | Webstrom Tech` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
      
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || "@rrishabh_mishra"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
