import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import MovieWrapper from './MovieWrapper'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import Search from './Search'
import MyPage from './MyPage'
import Login from './Login'
import styled from 'styled-components'
import Navbar from './Navbar'
import Error from './Error'

const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center; // 혹은 margin 0 auto를 해도됨
`
const Section = styled.div`
width: 60%;

@media (max-width : 767px) {
    width: 100%;
}
@media (min-width : 768px )and( max-width : 1023px) {
    width: 80%;
}
@media (min-width : 1024px) {
    width: 60%;
}
`
const Menu = styled.div`
width: 100%;

`
const ContentBox = styled.div`
width: 100%;
margin-top: 30px;
`
const Footer = styled.div``


function MovieListMain() {
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <Section>
                        <Menu>
                            <Navbar>
                            </Navbar>
                        </Menu>
                        <ContentBox>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/movie" element={<MovieWrapper />} >
                                    {/* index : 부모랑 주소가 같으면 즉, path="/movie"의미 */}
                                    <Route index element={<MovieList />} />
                                    <Route path=':id' element={<MovieDetail />} />
                                </Route>
                                <Route path="/search" element={<Search />} />
                                <Route path="/mypage" element={<MyPage />} />
                                <Route path="/login" element={<Login />} />
                                {/* 위에 있는 url 이름이 아니면 * 사용 */}
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </ContentBox>
                    </Section>
                    <Footer>
                    </Footer>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default MovieListMain
