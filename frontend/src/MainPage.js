import LoginPageHeader from "./component/LoginPageHeader"
import { FunctionComponent } from "react";
import "./css/MainPage.css"

const MainPage=()=>{
    return(
    <div className="MainPage">
        
    <LoginPageHeader></LoginPageHeader>
        
    <div className="MainPage_firstpage">

        <div className="MainPage_firstPage_textbox">
            <span className="MainPage_firstPage_maintext">
                BZero
            </span>

            <span className="MainPage_firstPage_subtext">
                제로웨이스터들을 위한 플랫폼
            </span>

            <button className="MainPage_firstPage_start">
                시작하기
            </button>

        </div>
        

        <div className="MainPage_firstPage_imgbox">
        <div className="MainPage_vector7"><img src={process.env.PUBLIC_URL+`../img/Rectangle 87.png`}></img></div>
        <div className="MainPage_vector4"><img src={process.env.PUBLIC_URL+`../img/Group 1122.png`}></img></div>
        <div className="MainPage_vector1"><img src={process.env.PUBLIC_URL+`../img/Vector 28.png`}></img></div>
        <div className="MainPage_vector2"><img src={process.env.PUBLIC_URL+`../img/Vector 26.png`}></img></div>
        <div className="MainPage_vector3"><img src={process.env.PUBLIC_URL+`../img/Vector 29.png`}></img></div>
        <div className="MainPage_vector5"><img src={process.env.PUBLIC_URL+`../img/Subtract.png`}></img></div>
        <div className="MainPage_vector6"><img src={process.env.PUBLIC_URL+`../img/Union.png`}></img></div>
        <div className="MainPage_vector8"><img src={process.env.PUBLIC_URL+`../img/Vector 27.png`}></img></div>
       </div>
       {/* <div className="MainPage_firstPage_imgbox">
        <div className="MainPage_vector7"><img src={`/static/Rectangle 87.png`}></img></div>
        <div className="MainPage_vector4"><img src={`/static/Group 1122.png`}></img></div>
        <div className="MainPage_vector1"><img src={`/static/Vector 28.png`}></img></div>
        <div className="MainPage_vector2"><img src={`/static/Vector 26.png`}></img></div>
        <div className="MainPage_vector3"><img src={`/static/Vector 29.png`}></img></div>
        <div className="MainPage_vector5"><img src={`/static/Subtract.png`}></img></div>
        <div className="MainPage_vector6"><img src={`/static/Union.png`}></img></div>
        <div className="MainPage_vector8"><img src={`/static/Vector 27.png`}></img></div>
       </div> */}
 
    </div>

    <div className="MainPage_secondPage">

        <span className="MainPage_secondPage_Maintext">
            제로웨이스트, 혹시 실천하는데 어려움이 있었나요? 
        </span>
        <span className="MainPage_secondPage_subtext">
            제로웨이스트, 막상 마음은 먹었지만 어렵게 느껴지시나요?
        </span>

        <div className="MainPage_secondPage_blockblock">

            <div className="MainPage_secondPage_block">
                <span>뭐뭐가 어려워요! 뭐뭐한거 없을까요?
                    <img src={process.env.PUBLIC_URL+`../img/Group 1148.png`}/> </span>
            </div>
            <div style={{backgroundColor:'#0679FF'}} className="MainPage_secondPage_block2">
         <span><img src={process.env.PUBLIC_URL+`../img/Group 1148.png`}/>뭐뭐가 어려워요! 뭐뭐한거 없을까요?
                     </span>
            </div>
            <div style={{backgroundColor:'#72EFCA'}}className="MainPage_secondPage_block">
            <span>뭐뭐가 어려워요! 뭐뭐한거 없을까요?
                    <img src={process.env.PUBLIC_URL+`../img/Group 1148.png`}/> </span>
            </div>
            <div style={{backgroundColor:'#8692FF'}} className="MainPage_secondPage_block2">
            <span><img src={process.env.PUBLIC_URL+`../img/Group 1148.png`}/>뭐뭐가 어려워요! 뭐뭐한거 없을까요?
                     </span>
            </div>

        </div>

    </div>

    <div className="MainPage_subpage">
        
        <img src={process.env.PUBLIC_URL+`../img/Vector 47.png`}className="MainPage_subpage_vector"/> 
        <img src={process.env.PUBLIC_URL+`../img/Vector 47.png`}className="MainPage_subpage_vector"/>   
        <img src={process.env.PUBLIC_URL+`../img/Vector 47.png`}className="MainPage_subpage_vector"/>         

        {/* <img src={process.env.PUBLIC_URL+`../img/Group 1161.png`}className="MainPage_subpage_trash"/> */}
        
        </div>   
    <div className="MainPage_thirdpage">

       <div className="MainPage_thirdpage_textbox">
        <div className="MainPage_thirdpage_maintext">공병 수거와 같은 우리 주위의 사소한 제로웨이스트들!</div>
        <div className="MainPage_thirdpage_subtext">BZero는 내 근처 공병 수거 가게를 찾아 주는 서비스를 제공합니다.</div>
        
       </div>

       <div className="MainPage_thirdpage_imagebox">
       <img className="MainPage_thirdpage_glass" src={process.env.PUBLIC_URL+`../img/Group 1170.png`}/>
       <img src={process.env.PUBLIC_URL+`../img/Group 1172.png`}/>
       </div>


    </div>

    <div className="MainPage_fourth">

    <div className="MainPage_fourthpage_imagebox">
        <img src={process.env.PUBLIC_URL+`../img/PEOPLE.png`}/>
        <img style={{width:'292px'}} src={process.env.PUBLIC_URL+`../img/ZERO.png`}/>
    </div>
    
    <div className="MainPage_fourthpage_textbox">
       <div className="MainPage_fourthpage_maintext">제로웨이스터들을 위한 커뮤니티 플랫폼</div>
       <span className="MainPage_fourthpage_subtext">혹시 주위의 다른 제로웨이스터들과 소통하고 싶으신가요?<br></br>
       BZero의 제로웨이스트 커뮤니티를 이용하여 제로웨이스트 라이프를 공유해보세요!</span><br></br>
       <button className="MainPage_fourthPage_start">시작하기</button>
       </div>
    </div>

    </div>
)
}

export default MainPage