import styled from "styled-components"
import Header from "../../component/Header/Header"
import Banner from "../../component/Banner/Banner"

const Wrapper = styled.div`
  overflow-y: scroll;
  background: #ffffff;
  min-height: 100vh;
`

const Container = styled.div`
    margin-top: 250px;
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