import styled from "styled-components";

const CenterText = styled.div`
  font-size: 48px;
  margin-top: 280px;
  text-align: center;
`

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 8px;
  text-align: center;
`

function Title() {
  return (
    <div>
      <CenterText>My Name</CenterText>
      <SubTitle>Subtitle Goes Here</SubTitle>
    </div>
  )
}

export default Title;