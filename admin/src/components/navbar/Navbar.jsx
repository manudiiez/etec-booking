import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
/* ---------------------------- styled-components --------------------------- */
import styled from 'styled-components'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const {user} = useContext(AuthContext)

  return (
    <Container className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <img
              src={user.details.img}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`

  height: 50px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;

  .wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: end;

    .items {
      display: flex;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        position: relative;

        .icon {
          font-size: 20px;
        }

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }
    }
  }


`