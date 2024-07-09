"use client";
import OfficesComponent from "@components/location/location.component";
import PageContent from "@components/page-content/page-content";
import ProductItem from "@components/products/product-item.component";
import DefaultLayout from "@layouts/default-layout";
import { Spin } from "antd";
import Link from "next/link";
import { Suspense } from "react";

export default function IndexPage() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            minHeight: "65vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      }
    >
      <DefaultLayout>
        <div style={{ opacity: 1, width: "100%" }} className="content">
          <div id="Top" className="hero-section">
            <div className="hero-content-wrapper reverse w-container">
              <div className="hero-left center">
                <img
                  src="/images/dog-print.png"
                  loading="lazy"
                  width="241"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    opacity: 1,
                    transformStyle: "preserve-3d",
                  }}
                  alt=""
                  className="paw"
                />
                <img
                  src="/images/64c156fbc978cee3e867aff3_Guy-pet-lover.png"
                  loading="lazy"
                  style={{ opacity: 1 }}
                  width="403.5"
                  alt=""
                  srcSet="/images/64c156fbc978cee3e867aff3_Guy-pet-lover.png 500w, /images/64c156fbc978cee3e867aff3_Guy-pet-lover.png 807w"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 60vw, (max-width: 991px) 47vw, 403.4942932128906px"
                  className="hero-dog"
                />
              </div>
              <div className="hero-right about-us">
                <div className="max-540-pixels">
                  <div>
                    <div
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className="hero-fill-title"
                    >
                      Shopping
                    </div>
                    <div style={{ display: "block" }} className="hidden">
                      <h1
                        className="hero-row-1 small"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: 1,
                        }}
                      >
                        Shop in our
                      </h1>
                    </div>
                    <div style={{ display: "block" }} className="hidden">
                      <h1
                        className="hero-row-2 small"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: 1,
                        }}
                      >
                        Pet Store
                      </h1>
                    </div>
                  </div>
                  <div className="hero-subtitle-box">
                    <div className="hero-text">
                      <div
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-title"
                      >
                        We love pets like you do :)
                      </div>
                      <p
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-subtitle"
                      >
                        Pets Webflow eCommerce Template is a modern and fresh
                        approach of an online store.
                      </p>
                    </div>
                    <div className="hero-button-box _40-pixels">
                      <Link
                        href="#Intro"
                        data-w-id="216a2f04-c66f-984c-2748-590a9115ebd8"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-button w-inline-block"
                      >
                        <div className="hero-button-flex">
                          <img
                            src="/images/64c2aa9017fa9543f5aaacb9_Pet.png"
                            loading="lazy"
                            alt=""
                            width="35"
                            className="dog-button"
                          />
                          <div className="button-flex-height">
                            <div className="hero-button-text">
                              <div>Go Shopping!</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="curve-bg no-margin"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              <div className="curve-text-container">
                <div className="hero-mini-pic"></div>
                <div className="curve-text-box">
                  <a href="#" className="mini-title-link">
                    Call Us Today &nbsp;800-236-789
                  </a>
                </div>
              </div>
              <div className="right-white-bg"></div>
            </div>
            <a
              href="#Intro"
              data-w-id="216a2f04-c66f-984c-2748-590a9115ebe6"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
              className="scroll-down w-inline-block"
            >
              <img
                src="/images/64c02f4e5960ed4f4cede06d_Scroll_arrow.png"
                loading="lazy"
                alt=""
                width="16"
                className="scroll-arrow"
                style={{
                  transform:
                    "translate3d(0px, 9.248px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              />
            </a>
            <div
              style={{ width: "0%", display: "block", height: "757.825px" }}
              className="hero-bg"
            ></div>
          </div>
          <div id="Intro" className="content-section store">
            <div className="content-wrapper">
              <div
                data-w-id="05bef794-16c2-6b98-b1ea-df029fb1ead8"
                className="heading-full"
              >
                <h4 className="h4">Latest products</h4>
                <div
                  style={{
                    transform:
                      "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="divider-line"
                ></div>
              </div>
              <PageContent hasSider>
                <div role="list" className="flex w-dyn-items">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </PageContent>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}