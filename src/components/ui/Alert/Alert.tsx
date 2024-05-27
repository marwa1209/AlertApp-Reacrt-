/** @format */
import "./Alert.scss";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import type { AlertType } from "../../../types";

interface IProps {
  type: AlertType;
  icon: ReactNode;
  title: string;
  desc?: string;
  children?: ReactNode;
}
const Alert = ({ type, icon, title, desc, children }: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            <span>{icon}</span>
            <h2>{title}</h2>
          </div>
          <X className="close" />
        </div>
        {children ? children : <p>{desc}</p>}
      </div>
    </>
  );
};
export default Alert;
