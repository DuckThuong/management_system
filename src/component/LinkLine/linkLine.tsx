import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./linkLine.scss";

export interface BreadcrumbItem {
  url: string;
  name: string;
}

interface LinkLineProps {
  items: BreadcrumbItem[];
}

export const LinkLine: React.FC<LinkLineProps> = ({ items }) => {
  return (
    <div className="link-line">
      <Breadcrumb>
        {items.map((item, idx) => (
          <Breadcrumb.Item key={item.url}>
            <Link to={item.url}>{item.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};
