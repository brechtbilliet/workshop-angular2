import {collapsableSidebarReducer} from "./reducers/containers/collapsableSidebarReducer";
import {authenticationReducer} from "./reducers/data/authenticationReducer";
import {winesReducer} from "./reducers/data/winesReducer";
import {applicationReducer} from "./reducers/containers/applicationReducer";
import {editStockReducer} from "./reducers/containers/editStockReducer";
import {
    DATA_AUTHENTICATION_CLEAR_AUTHENTICATION,
    DATA_AUTHENTICATION_SET_AUTHENTICATION,
    DATA_WINES_ADD,
    DATA_WINES_ADD_ALL,
    DATA_WINES_REMOVE,
    DATA_WINES_UPDATE,
    DATA_WINES_UPDATE_RATE,
    DATA_WINES_UPDATE_STOCK,
    CONTAINER_EDITSTOCKPAGE_CLEAR_WINE,
    CONTAINER_EDITSTOCKPAGE_SET_WINE,
    CONTAINER_COLLAPSABLESIDEBAR_TOGGLE,
    CONTAINER_APPLICATION_DISABLE_BUSY_FLAG,
    CONTAINER_APPLICATION_ENABLE_BUSY_FLAG
} from "./actionTypes";
import {createReducerTree} from "create-reducer-tree";

let reducerComposer: any = {
    data: {
        authentication: {
            initialState: {
                isAuthenticated: false,
                jwtToken: "",
                account: null
            },
            actions: [
                DATA_AUTHENTICATION_SET_AUTHENTICATION,
                DATA_AUTHENTICATION_CLEAR_AUTHENTICATION
            ],
            reducer: authenticationReducer
        },
        wines: {
            initialState: [],
            actions: [
                DATA_WINES_ADD,
                DATA_WINES_ADD_ALL,
                DATA_WINES_REMOVE,
                DATA_WINES_UPDATE,
                DATA_WINES_UPDATE_RATE,
                DATA_WINES_UPDATE_STOCK
            ],
            reducer: winesReducer
        }

    },
    container: {
        editStockPage: {
            initialState: {},
            actions: [
                CONTAINER_EDITSTOCKPAGE_CLEAR_WINE,
                CONTAINER_EDITSTOCKPAGE_SET_WINE],
            reducer: editStockReducer
        },
        collapsableSidebar: {
            initialState: {isCollapsed: false},
            actions: [CONTAINER_COLLAPSABLESIDEBAR_TOGGLE],
            reducer: collapsableSidebarReducer
        },
        application: {
            initialState: {isBusy: false},
            actions: [CONTAINER_APPLICATION_ENABLE_BUSY_FLAG, CONTAINER_APPLICATION_DISABLE_BUSY_FLAG],
            reducer: applicationReducer
        }
    }
};

export let store = createReducerTree(reducerComposer);