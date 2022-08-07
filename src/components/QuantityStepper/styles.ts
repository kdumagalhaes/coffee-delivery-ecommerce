import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 6px;
    background-color: ${props => props.theme['base-button']};
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    background: transparent;
    padding: 0.5rem 0.8rem;
    color: ${props => props.theme['purple-dark']};
    font-size: 1.25rem;
`

export const Quantity = styled.span`
    color: ${props => props.theme['base-title']};
`
