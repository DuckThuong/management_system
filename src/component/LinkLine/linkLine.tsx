import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./linkLine.scss";

export interface BreadcrumbItem {
  key: string;
  name: string;
}

interface LinkLineProps {
  items: BreadcrumbItem[];
  onClick?: (item: BreadcrumbItem) => void;
}

export const LinkLine: React.FC<LinkLineProps> = ({ items, onClick }) => {
  const handleClick = (item: BreadcrumbItem) => {
    if (onClick) {
      onClick(item);
    }
  };
  return (
    <div className="link-line">
      <Breadcrumb>
        {items.map((item, idx) => (
          <Breadcrumb.Item key={item.key}>
            <Link
              onClick={(e) => {
                handleClick(item);
              }}
              to={""}
            >
              {item.name}
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};
