import styled, { css } from 'styled-components/native'

interface StyledTextProps {
  categoryList?: boolean
  mealListHeader?: boolean
  title?: boolean
}

interface StyledTouchableOpacityProps {
  background?: string
  gridItem?: boolean
  mealList?: boolean
}

interface StyledViewProps {
  categoryList?: boolean
  mealListHeader?: boolean
  mealListFooter?: boolean
}

export const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const StyledText = styled.Text<StyledTextProps>`
  ${({ categoryList }) =>
    categoryList &&
    css`
      font-size: 25px;
      font-weight: bold;
      text-align: right;
    `}

  ${({ title }) =>
    title &&
    css`
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    `}

  ${({ mealListHeader }) =>
    mealListHeader &&
    css`
      font-size: 21px;
      font-weight: bold;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 0;
    `}
`

export const StyledTouchableOpacity = styled.TouchableOpacity<
  StyledTouchableOpacityProps
>`
  background: ${({ background }) => background || 'transparent'};

  ${({ gridItem }) =>
    gridItem &&
    css`
      flex: 1;
      margin: 15px;
      height: 150px;
      border-radius: 10px;
      padding: 15px;

      shadow-color: #000;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;

      shadow-offset: 0px 2px;

      elevation: 5;
    `}

  ${({ mealList }) =>
    mealList &&
    css`
      height: 200px;
      margin: 7.5px 10px;
      border-radius: 10px;
      overflow: hidden;
    `}
`

export const StyledView = styled.View<StyledViewProps>`
  ${({ categoryList }) =>
    categoryList &&
    css`
      flex: 1;
      justify-content: flex-end;
    `}

  ${({ mealListHeader }) =>
    mealListHeader &&
    css`
      height: 85%;
    `}

  ${({ mealListFooter }) =>
    mealListFooter &&
    css`
      height: 15%;
      padding: 0 10px;
      background: #dbdbdb;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`
