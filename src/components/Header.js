import styled from "styled-components";
import { useEffect } from 'react';
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {
  selectUserName, 
  setSignOutState, 
  setuserlogindetails,
  selectUserPhoto,
} from "../features/user/userslice";

const Header = (props) =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  
  useEffect(() =>{
    auth.onAuthStateChanged(async (user) =>{
      if(user){
        setUser(user);
        navigate('/home');
      }
    });
  }, [username]);




    const handleAuth =() =>{
      if (!username){
      auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
        })
            .catch((error) => {
            alert(error.message);
        });
      }else if(username){
        auth
            .signOut()
            .then(() =>{
            dispatch(setSignOutState());
            navigate("/");
            })
        .catch((err) => alert(err.message));
      }
    };

    const setUser =(user) =>{
      dispatch(
        setuserlogindetails({   
             name: user.displayName,
             email: user.email,
             photo: user.photoURL,

        })
        );
    };
    return (
        <Nav>
            <Logo>
                <img src="images/logo.svg" alt ="logo"></img>
            </Logo>

            {!username ? (
            <Login onClick={handleAuth}>Login</Login> 
            ): (
           <> 
            <Navmenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home"/>
                <span>HOME</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="Home" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="Home" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="Home" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="Home" />
                    <span>SERIES</span>
                </a>
            
            </Navmenu>
            <SignOut>
                <UserImg src={userPhoto} alt={username} />
                <DropDown>
                  <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
  
          </>
)}
        </Nav>

    );
};
const Nav = styled.nav`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #060b13;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 36px;
   letter-spacing: 16px;
   z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 5px;
  display: inline-block;

  img {
      display: block;
      width: 100%;
  }
`;

const Navmenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
    background-color:rgba(0,0,0,0.6);
    padding:8px 16px;
    letter-spacing:2px;
    font-weight:bold;
    border: 1px solid #f9f9f9;
    border-radius:3px;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    
    &:hover{
        background-color:#f9f9f9;
        color:black;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
   height:100%;
 
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19,19);
    border: 1px solid #f9f9f9;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:1.5px;
    width:100px;
    opacity:0;
    border-color:white;


`;
const SignOut = styled.div`
    cursor:pointer;
    position:relative;
    height:40px;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center;

    ${UserImg} {
      border-radius:50%;
      height:100%;
      weight:100%;
    }

    &:hover{
      ${DropDown}{
        opacity:1;
        transition-duration:1s;
      }
    }



`;    



export default Header;