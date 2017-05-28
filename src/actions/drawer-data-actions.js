import { DRAWER_DISPLAY_GO_BACK,
  DRAWER_DISPLAY_SELF,
  DRAWER_TITLE,
  DRAWER_SET } from "../config/actions-types"
import initialState from "../config/initial-state"

export const setDrawerDisplayGoBack = (displayGoBack = initialState.drawerData.displayGoBack) => {
  return{
    type: DRAWER_DISPLAY_GO_BACK,
    displayGoBack
  }
}

export const setDrawerDisplaySelf = (displaySelf = initialState.drawerData.displaySelf) => {
  return{
    type: DRAWER_DISPLAY_SELF,
    displaySelf
  }
}

export const setDrawerTitle = (title = initialState.drawerData.title) => {
  return{
    type: DRAWER_TITLE,
    title
  }
}

export const setDrawerData = ({
  displayGoBack = initialState.drawerData.displayGoBack,
  displaySelf = initialState.drawerData.displaySelf,
  title = initialState.drawerData.title
}) => {
  return{
    type: DRAWER_SET,
    displayGoBack,
    displaySelf,
    title
  }
}