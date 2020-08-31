import styled, { css } from 'styled-components/native'

interface StyledTextProps {
  align?: string
  background?: string
  bold?: boolean
  color?: string
  margin?: string
  padding?: string
  size?: string
}

interface StyledTouchableOpacityProps {
  background?: string
  gridItem?: boolean
  mealItem?: boolean
}

interface StyledViewProps {
  categoryList?: boolean
  filterScreenContainer?: boolean
  filterScreenSwitch?: boolean
  mealDetailImgLabel?: boolean
  mealDetailListItem?: boolean
  mealItemTitle?: boolean
  mealItemFooter?: boolean
}

export const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`

export const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const StyledScrollView = styled.ScrollView`
  background: #ffffff;
`

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({ size }) => (size ? size : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => (align ? align : 'left')};
  color: ${({ color }) => (color ? color : 'black')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  background: ${({ background }) => (background ? background : 'transparent')};
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

  ${({ mealItem }) =>
    mealItem &&
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

  ${({ filterScreenContainer }) =>
    filterScreenContainer &&
    css`
      flex: 1;
      align-items: center;
    `}

  ${({ filterScreenSwitch }) =>
    filterScreenSwitch &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 15px 0;
    `}

  ${({ mealDetailImgLabel }) =>
    mealDetailImgLabel &&
    css`
      background: #f9f9f9;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
    `}

  ${({ mealDetailListItem }) =>
    mealDetailListItem &&
    css`
      margin: 10px 20px;
      border-color: #ccc;
      border-width: 1px;
      padding: 10px;
    `}

  ${({ mealItemTitle }) =>
    mealItemTitle &&
    css`
      height: 85%;
    `}

  ${({ mealItemFooter }) =>
    mealItemFooter &&
    css`
      height: 15%;
      padding: 0 10px;
      background: #dbdbdb;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`
