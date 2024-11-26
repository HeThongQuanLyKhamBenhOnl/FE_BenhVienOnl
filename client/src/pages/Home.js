import React, { useEffect } from "react";
import { Layout } from "antd";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../components/Header/Header";
import SectionComponent from "../components/Section/Section";
import FooterComponent from "../components/component/Footer";
import { useNavigate, Link } from "react-router-dom";
import './CSS/Home.css';
const { Content } = Layout;

export const Home = () => {
  const navigate = useNavigate();

  const backgroundImageDoctorSection = 'url(https://cdn.bookingcare.vn/fo/2023/11/01/140311-background5.png)';

  const reasonsData = [
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741706/layer-511-_2_wwx6ui.jpg",
      title: "Trang thiết bị hiện đại",
      description:
        "Với quy mô gồm 30 phòng khám và các phòng chức năng được đầu tư thiết bị máy móc hiện đại của các thương hiệu hàng đầu thế giới như GE, Fuji, Olympus, Kart Stoz, Phillip, Sysmex...",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741722/layer-5111-_2_kbmcq4.jpg",
      title: "Bác sĩ chuyên môn cao",
      description:
        "Phòng khám Bệnh viện quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ chuyên môn cao, tay nghề giỏi, luôn tận tâm và chu đáo với người bệnh...",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741736/layer-6041_plxflh.jpg",
      title: "Dịch vụ chuẩn quốc tế",
      description:
        "Phòng khám Bệnh viện được quản lý và vận hành theo tiêu chuẩn quốc tế, cơ sở vật chất hiện đại, tiện nghi, không gian khám chữa bệnh rộng rãi, sạch sẽ...",
    },
  ];

  return (
    <div>
      <Layout className="layout">
        <HeaderComponent />

        <Content style={{ margin: "20px 0px" }}>
          <div className="site-layout-content" style={{ padding: "50px 0" }}>
            <SectionComponent />
          </div>
        </Content>

        <div class="media-section">
          <div class="media-bg">
            <img
              alt=""
              fetchpriority="high"
              decoding="async"
              srcset="
                https://cdn.bookingcare.vn/fo/w640/2023/11/01/140309-background3.png 640w,
                https://cdn.bookingcare.vn/fo/w750/2023/11/01/140309-background3.png 750w,
                https://cdn.bookingcare.vn/fo/w828/2023/11/01/140309-background3.png 828w,
                https://cdn.bookingcare.vn/fo/w1080/2023/11/01/140309-background3.png 1080w,
                https://cdn.bookingcare.vn/fo/w1200/2023/11/01/140309-background3.png 1200w,
                https://cdn.bookingcare.vn/fo/w1920/2023/11/01/140309-background3.png 1920w,
                https://cdn.bookingcare.vn/fo/2023/11/01/140309-background3.png 2048w,
                https://cdn.bookingcare.vn/fo/2023/11/01/140309-background3.png 3840w
              "
              src="https://cdn.bookingcare.vn/fo/2023/11/01/140309-background3.png"
              class="background-img"
            />
          </div>

          <div class="media-content">
            <h2 class="media-title">Truyền thông nói về BookingCare</h2>

            <div class="media-wrapper">
              <div class="video-wrapper">
                <iframe
                  frameborder="0"
                  allowfullscreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                  src="https://www.youtube.com/embed/FyDQljKtWnI?autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fbookingcare.vn&widgetid=5"
                  class="video-frame"
                ></iframe>
              </div>

              <div class="media-links">
                <a href="https://vnexpress.net/" class="media-item" target="_blank">
                  <img
                    alt="VnExpress"
                    src="https://bookingcare.vn/assets/truyenthong/vnexpress.png"
                    class="media-logo"
                  />
                </a>
                <a href="https://suckhoedoisong.vn/" class="media-item" target="_blank">
                  <img
                    alt="Báo sức khỏe đời sống"
                    src="https://bookingcare.vn/assets/truyenthong/suckhoedoisong.png"
                    class="media-logo"
                  />
                </a>
                <a href="https://vietnamnet.vn/" class="media-item" target="_blank">
                  <img
                    alt="Báo Vietnamnet"
                    src="https://cdn.bookingcare.vn/fo/2024/10/22/142415-logo-vnnet.jpg"
                    class="media-logo"
                  />
                </a>
                <a href="https://vtv.vn/" class="media-item" target="_blank">
                  <img
                    alt="VTV"
                    src="https://bookingcare.vn/assets/truyenthong/vtv1.png"
                    class="media-logo"
                  />
                </a>
                <a href="https://vtc.vn/" class="media-item" target="_blank">
                  <img
                    alt="VTC News"
                    src="https://cdn.bookingcare.vn/fo/w256/2023/11/01/165432-vtcnewslogosvg.png"
                    class="media-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Phần Giá trị cốt lõi */}
        <div className="py-8" style={{ width: "100%" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#0056a6" /* Màu xanh đậm */,
              fontSize: "2rem",
              fontWeight: "bold",
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            GIÁ TRỊ CỐT LÕI
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "50px",
                  height: "1px",
                  backgroundColor: "#a3d1ef" /* Màu xanh nhạt */,
                  margin: "0 10px",
                }}
              ></span>
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#73c2ec" /* Màu xanh của biểu tượng */,
                }}
              >
                ✦
              </span>{" "}
              {/* Bạn có thể thay thế icon này */}
              <span
                style={{
                  width: "50px",
                  height: "1px",
                  backgroundColor: "#a3d1ef",
                  margin: "0 10px",
                }}
              ></span>
            </div>
          </h2>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={6} className="text-center">
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3e73d4",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740676/vector-smart-object-1_dlrqa1.png"
                  alt="Tiên phong"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>TIÊN PHONG</h3>
            </Col>

            <Col xs={24} md={6} className="text-center">
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3e73d4",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740700/layer-600juykyfu_gybtcl.png"
                  alt="Thấu hiểu"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>THẤU HIỂU</h3>
            </Col>

            <Col xs={24} md={6} className="text-center">
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3e73d4",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740719/layer-601_sb3r6p.png"
                  alt="Chuẩn mực"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>CHUẨN MỰC</h3>
            </Col>

            <Col xs={24} md={6} className="text-center">
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#3e73d4",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740741/layer-602_t2eqrw.png"
                  alt="An toàn"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>AN TOÀN</h3>
            </Col>
          </Row>
        </div>

        {/* Bác sĩ nổi bật */}
        <div class="css-175oi2r">
          <div style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/2023/11/01/140311-background5.png)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", }} >
            <div class="css-175oi2r m-auto w-full py-3 pl-2.5 pr-0 sm:py-5 md:w-md md:pl-0 lg:w-lg xl:w-xl">
              <div class="css-175oi2r flex-row items-center justify-between" data-testid="header">
                <div dir="auto" class="css-146c3p1 text-base font-semibold text-[#1A1A1A] sm:text-xl sm:leading-6 md:leading-8 lg:text-2xl lg:leading-10" data-testid="header-title">
                  Bác sĩ nổi bật
                </div>
                <a href="/danh-sach/bac-si/noi-bat" dir="auto" class="css-146c3p1 mr-2 rounded-2xl bg-transparent px-0 py-2.5 sm:bg-[#DAF3F6] sm:px-1.5 sm:py-2.5 md:mr-0 lg:px-2" data-testid="cta-title">
                  <span class="css-1jxf684 text-sm font-semibold text-[#34929E] sm:text-lg sm:leading-6 md:leading-7 lg:text-xl lg:leading-8">
                    Xem thêm
                  </span>
                </a>
              </div>
            </div>
            <div class="css-175oi2r m-auto w-full py-3 pl-2.5 pr-0 sm:py-5 md:w-md md:pl-0 lg:w-lg xl:w-xl" data-testid="horizontal-list">
              <div class="css-175oi2r r-150rngu r-18u37iz r-16y2uox r-1wbh5a2 r-lltvgl r-buy8e9 r-agouwx r-2eszeu">
                <div class="css-175oi2r r-18u37iz">
                  <div class="css-175oi2r r-18u37iz">
                    <a href="/dich-vu-y-te/kham-chuyen-khoa/tien-si-bac-si-tran-thi-ha-an-i189" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-0" style={{ width: "264px", }}>
                      <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]">
                        <div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                          <img alt="Tiến sĩ, Bác sĩ Trần Thị Hà An" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2020/01/03/102609-ts-tran-thi-ha-an.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2020/01/03/102609-ts-tran-thi-ha-an.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2020/01/03/102609-ts-tran-thi-ha-an.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2020/01/03/102609-ts-tran-thi-ha-an.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2020/01/03/102609-ts-tran-thi-ha-an.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2020/01/03/102609-ts-tran-thi-ha-an.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2020/01/03/102609-ts-tran-thi-ha-an.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2020/01/03/102609-ts-tran-thi-ha-an.jpg 1920w, https://cdn.bookingcare.vn/fo/2020/01/03/102609-ts-tran-thi-ha-an.jpg 2048w, https://cdn.bookingcare.vn/fo/2020/01/03/102609-ts-tran-thi-ha-an.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2020/01/03/102609-ts-tran-thi-ha-an.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                        </div>
                      </div>
                      <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                        Tiến sĩ, Bác sĩ Trần Thị Hà An
                      </span>
                      <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                        Sức khỏe tâm thần
                      </span>
                    </a>
                  </div>
                  <div class="css-175oi2r r-18u37iz"><a href="/dich-vu-y-te/kham-chuyen-khoa/bac-si-chuyen-khoa-ii-tran-thi-hoai-huong-i1458" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-1" style={{ width: "264px", }}>
                    <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]"><div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                      <img alt="Bác sĩ chuyên khoa II Trần Thị Hoài Hương" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2021/01/14/160049-bs-hoai-huong.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2021/01/14/160049-bs-hoai-huong.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2021/01/14/160049-bs-hoai-huong.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2021/01/14/160049-bs-hoai-huong.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2021/01/14/160049-bs-hoai-huong.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2021/01/14/160049-bs-hoai-huong.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2021/01/14/160049-bs-hoai-huong.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2021/01/14/160049-bs-hoai-huong.jpg 1920w, https://cdn.bookingcare.vn/fo/2021/01/14/160049-bs-hoai-huong.jpg 2048w, https://cdn.bookingcare.vn/fo/2021/01/14/160049-bs-hoai-huong.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2021/01/14/160049-bs-hoai-huong.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                    </div>
                    </div>
                    <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                      Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                    </span>
                    <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                      Dda liễu
                    </span>
                  </a>
                  </div>
                  <div class="css-175oi2r r-18u37iz"><a href="/dich-vu-y-te/kham-chuyen-khoa/thac-si-bac-si-doan-thi-lan-i1880" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-2" style={{ width: "264px", }}>
                    <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]"><div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                      <img alt="Thạc sĩ, Bác sĩ Đoàn Thị Lan" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2021/10/07/145448-bs-lan.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2021/10/07/145448-bs-lan.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2021/10/07/145448-bs-lan.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2021/10/07/145448-bs-lan.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2021/10/07/145448-bs-lan.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2021/10/07/145448-bs-lan.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2021/10/07/145448-bs-lan.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2021/10/07/145448-bs-lan.jpg 1920w, https://cdn.bookingcare.vn/fo/2021/10/07/145448-bs-lan.jpg 2048w, https://cdn.bookingcare.vn/fo/2021/10/07/145448-bs-lan.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2021/10/07/145448-bs-lan.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                    </div>
                    </div>
                    <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                      Thạc sĩ, Bác sĩ Đoàn Thị Lan
                    </span>
                    <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                      Nhi khoa
                    </span>
                  </a>
                  </div>
                  <div class="css-175oi2r r-18u37iz">
                    <a href="/dich-vu-y-te/kham-chuyen-khoa/giao-su-tien-si-ha-van-quyet-i56" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-3" style={{ width: "264px", }}>
                      <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]">
                        <div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                          <img alt="Giáo sư, Tiến sĩ Hà Văn Quyết" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2019/12/31/155650-gs-ha-van-quyet.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2019/12/31/155650-gs-ha-van-quyet.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2019/12/31/155650-gs-ha-van-quyet.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2019/12/31/155650-gs-ha-van-quyet.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2019/12/31/155650-gs-ha-van-quyet.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2019/12/31/155650-gs-ha-van-quyet.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2019/12/31/155650-gs-ha-van-quyet.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2019/12/31/155650-gs-ha-van-quyet.jpg 1920w, https://cdn.bookingcare.vn/fo/2019/12/31/155650-gs-ha-van-quyet.jpg 2048w, https://cdn.bookingcare.vn/fo/2019/12/31/155650-gs-ha-van-quyet.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2019/12/31/155650-gs-ha-van-quyet.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                        </div>
                      </div>
                      <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                        Tiêu hoá,Bệnh Viêm gan
                      </span>
                    </a>
                  </div>
                  <div class="css-175oi2r r-18u37iz"><a href="/dich-vu-y-te/kham-chuyen-khoa/pho-giao-su-tien-si-bac-si-le-thi-tuyet-lan-i851" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-4" style={{ width: "264px", }}>
                    <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]">
                      <div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                        <img alt="Phó Giáo sư, Tiến sĩ, Bác sĩ Lê Thị Tuyết Lan" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 1920w, https://cdn.bookingcare.vn/fo/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 2048w, https://cdn.bookingcare.vn/fo/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2019/09/11/105801pho-giao-su-le-thi-tuyet-lan.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                      </div>
                    </div>
                    <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                      Phó Giáo sư, Tiến sĩ, Bác sĩ Lê Thị Tuyết Lan
                    </span>
                    <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                      Dị ứng miễn dịch,Hô hấp - Phổi
                    </span>
                  </a>
                  </div>
                  <div class="css-175oi2r r-18u37iz">
                    <a href="/dich-vu-y-te/kham-chuyen-khoa/tien-si-bac-si-nguyen-thi-thanh-thuy-i3159" dir="auto" data-media="rnmq-cc7f2288 rnmq-4981aede rnmq-33f62820 rnmq-947bd76d rnmq-b16f56f3" class="css-146c3p1  flex flex-col justify-start items-center my-1 mr-6 md:mr-8 lg:mr-10" data-testid="item-5" style={{ width: "264px", }}>
                      <div class="css-175oi2r r-xoduu5 w-[92%] md:w-[84%]"><div class="css-175oi2r r-xoduu5 overflow-hidden rounded-full w-full bc-aspect-ratio[10/10] r-1udh08x">
                        <img alt="Tiến sĩ, Bác sĩ Nguyễn Thị Thanh Thủy" fetchpriority="high" decoding="async" data-nimg="fill" sizes="(max-width: 768px) 50vw, (min-width: 768px) and (max-width: 992px) 33.33vw, 25vw" srcset="https://cdn.bookingcare.vn/fo/w256/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 256w, https://cdn.bookingcare.vn/fo/w384/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 384w, https://cdn.bookingcare.vn/fo/w640/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 640w, https://cdn.bookingcare.vn/fo/w750/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 750w, https://cdn.bookingcare.vn/fo/w828/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 828w, https://cdn.bookingcare.vn/fo/w1080/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 1080w, https://cdn.bookingcare.vn/fo/w1200/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 1200w, https://cdn.bookingcare.vn/fo/w1920/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 1920w, https://cdn.bookingcare.vn/fo/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 2048w, https://cdn.bookingcare.vn/fo/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg 3840w" src="https://cdn.bookingcare.vn/fo/2022/12/13/162528-ban-sao-cua-bs-nguyen-thi-thanh-thuy.jpg" style={{ height: "80%", width: "80%", inset: "0px", objectFit: "cover", color: "transparent", }} />
                      </div>
                      </div>
                      <span class="css-1jxf684 mb-1 mt-2.5 line-clamp-4 text-center text-sm font-medium text-[#113135] sm:text-base md:mt-5 md:text-18 md:font-semibold sm:leading-6 md:leading-7 lg:leading-8" data-testid="item-title">
                        Tiến sĩ, Bác sĩ Nguyễn Thị Thanh Thủy
                      </span>
                      <span class="css-1jxf684 max-[576px]:hidden line-clamp-2 text-center font-normal text-14 lg:text-16 text-[#626262] sm:leading-5 lg:leading-6" data-testid="item-description">
                        Cơ Xương Khớp
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div tabindex="0" class="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 absolute top-[45%] right-[-18px] py-2 px-3 w-10 h-10 rounded-lg border-1 border-[#B5E7ED] bg-whiteabsolute top-[45%] right-3 py-2 px-3 w-10 h-10 rounded-lg border-1 border-[#B5E7ED] bg-white" data-testid="next-button" style={{ transitionDuration: "0s", }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" preserveAspectRatio="none" width="12" height="24" fill="#34929E">
                  <path d="m89.45 87.5 143.1 152a23.94 23.94 0 0 1 6.562 16.5 23.96 23.96 0 0 1-6.562 16.5l-143.1 152c-9.12 9.6-24.31 10-33.93.9-9.688-9.125-10.03-24.38-.937-33.94l128.4-135.5-128.4-135.5c-9.093-9.56-8.753-24.71.937-33.9 9.62-9.09 24.81-8.69 33.93.94">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <FooterComponent />
      </Layout>
    </div>
  );
};

export default Home;