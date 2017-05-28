import { shallow } from 'enzyme';
import { expect } from 'chai';

import initialState from '../../../src/config/initial-state';
import { DRAWER_DISPLAY_GO_BACK, DRAWER_DISPLAY_SELF, DRAWER_TITLE, DRAWER_SET } from '../../../src/config/actions-types';
import drawerDataReducer from '../../../src/reducers/drawer-data-reducer';

describe("drawerData Reducer", () => {
  it("should set displaySelf", () => {
    let drawerData = drawerDataReducer(initialState.drawerData, {
      type: DRAWER_DISPLAY_SELF,
      displaySelf: true
    });

    expect(drawerData.displaySelf).to.eq(true);

    drawerData = drawerDataReducer(initialState.drawerData, {
      type: DRAWER_DISPLAY_SELF,
      displaySelf: false
    });

    expect(drawerData.displaySelf).to.eq(false);
  });

  it("should convert non boolean values into booleans", () => {
    let drawerData = drawerDataReducer(initialState.drawerData, {
      type: DRAWER_DISPLAY_SELF,
      displaySelf: null
    });

    expect(drawerData.displaySelf).to.eq(false);

    drawerData = drawerDataReducer(initialState.drawerData, {
      type: DRAWER_DISPLAY_SELF,
      displaySelf: ""
    });

    expect(drawerData.displaySelf).to.eq(false);

    drawerData = drawerDataReducer(initialState.drawerData, {
      type: DRAWER_DISPLAY_SELF,
      displaySelf: "not a boolean"
    });

    expect(drawerData.displaySelf).to.eq(true);
  });

  it("should set displayGoBack", () => {
    let drawerData = drawerDataReducer (initialState.drawerData, {
      type: DRAWER_DISPLAY_GO_BACK,
      displayGoBack: true
    });

    expect(drawerData.displayGoBack).to.eq(true);
  });
  it("should convert non boolean values into booleans from goBack", () =>{
    let drawerData = drawerDataReducer (initialState.drawerData, {
      type: DRAWER_DISPLAY_GO_BACK,
      displayGoBack: ""
    });
    expect(drawerData.displayGoBack).to.eq(false);
  })

  it("should set title", () =>{
    let drawerData = drawerDataReducer (initialState.drawerData, {
      type: DRAWER_TITLE,
      title: "abcdef"
    });
    expect(drawerData.title).to.eq("abcdef");
    drawerData = drawerDataReducer (initialState.drawerData, {
      type: DRAWER_TITLE,
      title: "outrotitulo"
    });
    expect(drawerData.title).to.eq("outrotitulo");
  })

  it ("shoult set drawer data", ()=>{
    let drawerData = drawerDataReducer (initialState.drawerData, {
      type: DRAWER_SET,
      title: "title",
      displayGoBack: true,
      displaySelf: true
    })
    expect(drawerData.title).to.eq("title")
    expect(drawerData.displayGoBack).to.eq(true)
    expect(drawerData.displaySelf).to.eq(true)
  });
});