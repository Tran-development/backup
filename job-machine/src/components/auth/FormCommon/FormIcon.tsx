import {
  GoogleOutlined,
  FacebookOutlined,
  TikTokOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const FormIcon = () => {
  return (
    <div className="social-icons">
      <a href="clear" className="icons">
        <GoogleOutlined />
      </a>
      <a href="#clear" className="icons">
        <FacebookOutlined />
      </a>
      <a href="#clear" className="icons">
        <TikTokOutlined />
      </a>
      <a href="#clear" className="icons">
        <GithubOutlined />
      </a>
    </div>
  );
};

export default FormIcon;
