import Mail from "@/assets/mail.svg";
<img
  className="select-none"
  draggable="false"
  src={Mail}
  alt="e-mail"
  style={{ width: "100%", height: "100%" }}
/>;
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: "100%",
        height: "80px",
      }}
      className="bg-card px-10"
    >
      © williamouyang.org, 2024
      
      {/* © 2024, Built by William Ouyang. The source code is available on GitHub. */}
    </div>
  );
};

export default Footer;
