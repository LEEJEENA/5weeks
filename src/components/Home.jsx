import {useNavigate } from "react-router-dom"

const Home = () => {

    //navigate
    const navigate = useNavigate()

    return(
        <>
            <div onClick={()=> {navigate("/")}}>Home</div> 
            <h1>오늘의 일기 - WIL/TIL</h1>
            <div onClick={()=> {navigate("/subpage1")}}>작성하기 연결</div>
            <hr/>
            <div onClick={()=> {navigate("/subpage2")}}>작성된 글 연결</div>
        </>
    )
}

export default Home;