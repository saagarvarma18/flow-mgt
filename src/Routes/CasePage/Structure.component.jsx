import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'

const { Title, Text } = Typography

const Wrapper = styled.div``
const Mains = styled.div`
    display: flex;
`
const Heading = styled.div`
    padding-bottom: 16px;
`

const Response = styled.div`
    border: 1px solid #e6e6e6;
    width: 100%;
`
const Header = styled.div`
    color: white;
    background-color: ${(props) => props.color || '#1890ff'};
    padding: 16px;
    display: flex;
`
const HeaderText = styled(Text)`
    color: white;
    font-weight: 600;
`
const ResponseBody = styled.div`
    padding: 16px;
`
const StructureInfo = styled.div`
    display: flex;
    padding: 16px 0px;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
`
const Space = styled.div`
    margin-top: 16px;
`
const StructureMain = styled.div`
    max-width: 50%;
    width: 50%;
`
const StructureChild = styled.div``

export default function Structure({ caseDetails }) {
    const structureData = JSON.parse(localStorage.getItem('structure'))
    console.log(structureData)
    return (
        <Wrapper>
            <Heading>
                <Title level={3}>
                    {`You are done! Congratulations on completing the ${caseDetails.title}. Here is how we think you fared Structure`}
                </Title>
            </Heading>
            <Mains>
                <Response>
                    <Header>
                        <HeaderText>Your response</HeaderText>
                    </Header>
                    <ResponseBody>
                        <Text>
                            Problem statement: {caseDetails.description}
                        </Text>
                        <Space />
                        {structureData.map((item) => (
                            <StructureInfo key={item.id}>
                                <StructureMain>
                                    <Text>{item.value}</Text>
                                </StructureMain>
                                <StructureChild>
                                    <ul>
                                        {item.children.map((child) => (
                                            <li key={child.id}>
                                                {child.value}
                                            </li>
                                        ))}
                                    </ul>
                                </StructureChild>
                            </StructureInfo>
                        ))}
                    </ResponseBody>
                </Response>
            </Mains>
            <br />
            <Mains>
                <Response>
                    <Header color="#305D7B">
                        <HeaderText>RocketBlocks suggested answer</HeaderText>
                    </Header>
                    <ResponseBody>
                        <Text>
                            Problem statement: {caseDetails.description}
                        </Text>
                        <Space />
                        {structureData.map((item) => (
                            <StructureInfo key={item.id}>
                                <StructureMain>
                                    <Text>{item.value}</Text>
                                </StructureMain>
                                <StructureChild>
                                    <ul>
                                        {item.children.map((child) => (
                                            <li key={child.id}>
                                                {child.value}
                                            </li>
                                        ))}
                                    </ul>
                                </StructureChild>
                            </StructureInfo>
                        ))}
                    </ResponseBody>
                </Response>
            </Mains>
        </Wrapper>
    )
}
