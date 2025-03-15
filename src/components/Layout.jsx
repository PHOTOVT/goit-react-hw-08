import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";

const style = {
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 960,
    margin: "0 auto",
  },
};

export const Layout = ({ children }) => {
  // const isOpen = useSelector(selectIsOpenModal);
  return (
    <div style={style.header}>
      <AppBar />
      <Toaster />
      {/* {isOpen && <ModalWindow />} */}
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
