import styled from "styled-components"
import Header from "../../component/Header/Header"
import Banner from "../../component/Banner/Banner"

const Wrapper = styled.div`
  overflow-y: none;
  background: #ffffff;
    min-height: 100vh;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;

    position: relative;
`

interface IProps {
    children: React.ReactNode
}    

export default function CustomLayout3({children}: IProps) {
    return (
        <Wrapper>
            <Header /> 
            <Banner />
            <Container>
            {children}
            </Container>
        </Wrapper>
    )
}