import styled from "styled-components";
import video1 from "../Videos/1564674844-disney.mp4";
import video2 from "../Videos/1564676115-marvel.mp4";
import video3 from "../Videos/1564676296-national-geographic.mp4";
import video4 from "../Videos/1564676714-pixar.mp4";
import video5 from "../Videos/1608229455-star-wars.mp4";



const Viewers = (props) =>{
    return (
      <Container>
          <Wrap>
            <img src="/images/viewers-disney.png" alt=""/>
            <video src={video1} autoPlay={true} loop={true} playsInline={true}>
            </video>
          </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video src={video2} autoPlay={true} loop={true} playsInline={true}>
             
            </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="" />
          <video src={video3} autoPlay={true} loop={true} playsInline={true}>
          </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
          <video src={video4} autoPlay={true} loop={true} playsInline={true}>
          </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
          <video src={video5} autoPlay={true} loop={true} playsInline={true}>
          </video>
        </Wrap>
      </Container>
    ); 
};

const Container = styled.div`
   display: grid;
   padding: 30px 0px 26px;
   margin-top: 30px
   grid-gap:25px;
   gap:25px;
   grid-template-columns: repeat(5, minmax(0,1fr));

   @media (max-width: 768px){
     grid-template-columns: repeat(1, minmax(0, 1fr));
   }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius:10px;
    box-shadow:rgb( 0 0 0 /69%) 0px 26px 30px -10px,
        rgb( 0 0 0 /73%) 0px 16px 10px -10px;

    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    border:3px solid rgba(249, 249, 249,0.1);
    
    img{
       inset:0px;
      display:block;
      height:100%;
      object-fit:cover;
      position:absolute;
      opacity:1;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      border: 3px solid rgba(249, 249, 249,0.1);
    }

    video{
      width:100%;
      height:100%;
      position:absolute;
      top:0px;
      opacity:0;
      z-index:0;
      
    }

    &:hover{
      box-shadow:rgb( 0 0 0 / 80%) 0px 40px 58px -16px,
                rgb( 0 0 0 / 72%) 0px 30px 22px -10px;
      
      transform: scale(1.05);
      border-color: rgba(249 , 249 , 249 , 0.8);
    
    video{
      opacity:1;
      
    } 
  }

    
`;



export default Viewers;