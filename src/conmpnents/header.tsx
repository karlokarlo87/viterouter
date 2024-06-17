import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      header
      <br></br>
      <Link to="/header">header</Link>&nbsp;
      <Link to="/footer">footer</Link>&nbsp;
      <Link to="/content">content</Link>&nbsp;
      <br></br>
      <Outlet />
    </>
  );
};
export default Header;
