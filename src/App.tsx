/** @format */

import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

function App() {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-default"}
          icon={<Bell size={30} />}
          title={"Upgrade your plan"}
        >
          {" "}
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            temporibus doloremque praesentium laboriosam iste totam officiis
            beatae sint non quas."
          </p>
        </Alert>

        <Alert
          type={"alert-info"}
          icon={<Info size={30} />}
          title={"Note"}
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alert
          type={"alert-success"}
          icon={<CheckCheck size={30} />}
          title={"Your order has been processed"}
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alert
          type={"alert-error"}
          icon={<Ban size={30} />}
          title={"Something went wrong"}
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
        <Alert
          type={"alert-warning"}
          icon={<AlertTriangle size={30} />}
          title={"Tips & Tricks"}
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
        />
      </div>
    </>
  );
}

export default App;
