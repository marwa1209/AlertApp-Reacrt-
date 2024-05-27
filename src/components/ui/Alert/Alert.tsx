/** @format */
import "./Alert.scss";
import { BellRing } from "lucide-react";
import { X } from "lucide-react";

interface IProps {}
const Alert = ({}: IProps) => {
  return (
    <>
      <div className="alert">
        <div className="alert-header">
          <div className="title">
            <BellRing />
            <h2>Alert</h2>
          </div>
          <span>
            <X />
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          quisquam eum voluptatibus minus nulla eos vero nisi harum doloribus
          fugit.
        </p>
      </div>
    </>
  );
};
export default Alert;
