import React from "react";
import { Image } from "antd";

const SectionWithImage = () => {
  return (
    <div className="section-image text-center">
      <Image
        width={400}
        src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740438/eb6b9a9a-product-panels_wellness-496x310--diag-thumb_hsoktv.png" // Đặt đường dẫn đến hình ảnh của bạn
        alt="Family Wellness Checkup"
      />
    </div>
  );
};

export default SectionWithImage;
