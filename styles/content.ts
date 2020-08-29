import styled, { css } from 'styled-components/native'

interface StyledTextProps {
  categoryList?: boolean
  title?: boolean
}

interface StyledTouchableOpacityProps {
  gridItem?: boolean
}

export const StyledText = styled.Text<StyledTextProps>`
  ${({ categoryList }) =>
    categoryList &&
    css`
      font-size: 20px;
    `}

  ${({ title }) =>
    title &&
    css`
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    `}
`

export const StyledTouchableOpacity = styled.TouchableOpacity<
  StyledTouchableOpacityProps
>`
  ${({ gridItem }) =>
    gridItem &&
    css`
      background: #dbdbdb;
      flex: 1;
      margin: 15px;
      height: 150px;
    `}
`

export const StyledView = styled.View``
