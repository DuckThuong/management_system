import { Spin } from "antd";
import { random } from "lodash";
import { Suspense } from "react";
import RequireAuth from "./requiredAuth";

export const SuspenseWrapper = (props: any) => {
  return (
    <RequireAuth>
      <Suspense
        key={"suspense-" + random(10)}
        fallback={
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Spin size="large" />
          </div>
        }
      >
        {props.component}
      </Suspense>
    </RequireAuth>
  );
};
