import React from "react";
import styles from "./Navbar.module.css";
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  FaRegHeart,
  FaRegQuestionCircle,
  FaShoppingBag,
  FaUser,
  FaRegUser
  
  
} from "react-icons/fa";
import {TiUserOutline} from "react-icons/ti";
import { BsChatLeftText } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import SubNav from "../subNav/subNav";
const Navbar = () => {
  const { pathname } = useLocation('');
  let page = pathname.split("/")[1];
  if (page == "join") return null;

  return (
    <div>
      <div className={styles.firstdivwithlogo}>
        <div className={styles.firstdiinsidediv}>
          <Link to="/marketplace" className={styles.firstdiinsideA}>
            Marketplace
          </Link>
        </div>

        <div
          className={styles.firstdiinsideigmgdiv}
          style={{ paddingTop: "5px" }}
        >
          <Link to="/help" className={styles.firstdiinsideA}>
            Help & FAQs
          </Link>
        </div>

        <div className={styles.firstdiinsideigmgdiv}>
          <img
            src="https://p.kindpng.com/picc/s/192-1929235_indian-flag-button-india-flag-button-png-transparent.png"
            className={styles.firstdivImg}
            alt=""
          />
        </div>
      </div>

      <div className={styles.secondDiv}>
        <Link to="/" className={styles.secondLink}>
         asos
        </Link>

        <Link to="/women" className={styles.secondspansecnd}>
        <span>WOMEN</span>  
        </Link>

        <Link to="/men" className={styles.secondspansecnd}>
          MEN
        </Link>

        <InputGroup size="md" width="800px" className={styles.secondInputGroup}>
          <Input
            pr="5.5rem"
            placeholder="Search for items and brands"
            className={styles.secondInput}
            // style={{fontWeight:'1000',color:"#2d2d2d",marginBottom:"8px",borderRadius:"25px",fontFamily:"'Josefin Slab', serif",fontSize:"15px",letterSpacing:"2px",width:"100%",}}
          />
          <InputRightElement width="4.0rem">
            <IconButton
              className={styles.secondIconBtn} //add hover to it
              colorScheme="dark"
              size="sm"
              icon={<SearchIcon className={styles.secondSearchIcon} />}
            />
          </InputRightElement>
        </InputGroup>
      <div className={styles.rightflex}>
        <div className={styles.dropdown}>
          <Icon as={FaRegUser}  className={styles.secondICOn1} />
          <div className={styles.dropdowncontent}>
            <div>
              {/* <Link to='#'className={styles.userA}>Sign In <span> | </span></Link> */}
              <Link to="/join" className={styles.userA}>
                Join
              </Link>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <Link to="#" className={styles.usera}>
                <FaUser
                  style={{
                    color: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                    fontSize: "22px",
                    paddingTop: "10px",
                  }}
                />
                My Account
              </Link>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <Link to="#" className={styles.usera}>
                <FaShoppingBag
                  style={{
                    color: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                    fontSize: "22px",
                    paddingTop: "10px",
                  }}
                />
                My Orders
              </Link>
            </div>

            <div style={{ paddingTop: "20px" }}>
              <Link to="#" className={styles.usera}>
                <FaRegQuestionCircle
                  style={{
                    color: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                    fontSize: "22px",
                    paddingTop: "10px",
                  }}
                />
                Returns Information
              </Link>
            </div>

            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Link to="#" className={styles.usera}>
                {" "}
                <BsChatLeftText
                  style={{
                    color: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                    fontSize: "22px",
                    paddingTop: "10px",
                  }}
                />
                Contact Preferences
              </Link>
            </div>
          </div>
        </div>

        <Link to="/likepage">
          <FaRegHeart className={styles.secondICOn} />
        </Link>

        <Link to="/cart">
          <FaShoppingBag className={styles.secondICOn} />
        </Link>
      </div>
      </div>
      {pathname == "/" ? null : <SubNav />}

      <div className={styles.thirdDiv}>
        <Link
          to="/women"
          style={{ marginLeft: "300px" }}
          className={styles.thirdbtn}
        >
          WOMEN
        </Link>
        <h1 className={styles.thirdH1}>
          {" "}
          SALE: UP TO 70% OFF!
          <span style={{ display: "block" }}>
            IT'S CALLED BIG DISCOUNT ENERGY
          </span>
        </h1>
        <Link
          to="/men"
          style={{ marginRight: "300px" }}
          className={styles.thirdbtn}
        >
          MEN
        </Link>
      </div>

     
    </div>
  );
};

export default Navbar;