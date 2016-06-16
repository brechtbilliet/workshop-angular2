import {collapsableSidebarReducer} from "./reducers/containers/collapsableSidebarReducer";
import {authenticationReducer} from "./reducers/data/authenticationReducer";
import {winesReducer} from "./reducers/data/winesReducer";
import {applicationReducer} from "./reducers/containers/applicationReducer";
import {DataState} from "./state/DataState";
import {ContainersState} from "./state/ContainersState";
import {editStockReducer} from "./reducers/containers/editStockReducer";
import {
    DATA_AUTHENTICATION_CLEAR_AUTHENTICATION, DATA_AUTHENTICATION_SET_AUTHENTICATION,
    DATA_WINES_ADD, DATA_WINES_ADD_ALL, DATA_WINES_REMOVE, DATA_WINES_UPDATE, DATA_WINES_UPDATE_RATE,
    DATA_WINES_UPDATE_STOCK, CONTAINER_EDITSTOCKPAGE_CLEAR_WINE, CONTAINER_EDITSTOCKPAGE_SET_WINE,
    CONTAINER_COLLAPSABLESIDEBAR_TOGGLE, CONTAINER_APPLICATION_DISABLE_BUSY_FLAG, CONTAINER_APPLICATION_ENABLE_BUSY_FLAG
} from "./actionTypes";

let dataState: DataState = {
    authentication: {
        isAuthenticated: false,
        jwtToken: "",
        account: null
    },
    wines: []
}
let containerState: ContainersState = {
    editStockPage: null,
    collapsableSidebar: null,
    application: null
}
function dataReducer(state: DataState = dataState, action: any = null): DataState {
    switch (action.type) {
        case DATA_AUTHENTICATION_SET_AUTHENTICATION:
        case DATA_AUTHENTICATION_CLEAR_AUTHENTICATION:
        case DATA_WINES_ADD:
        case DATA_WINES_ADD_ALL:
        case DATA_WINES_REMOVE:
        case DATA_WINES_UPDATE:
        case DATA_WINES_UPDATE_RATE:
        case DATA_WINES_UPDATE_STOCK:
            return {
                authentication: authenticationReducer(state.authentication, action),
                wines: winesReducer(state.wines, action)
            };
        default:
            return state;
    }
}
function containersReducer(state: ContainersState = containerState,
                           action: any = null): ContainersState {
    switch (action.type) {
        case CONTAINER_EDITSTOCKPAGE_CLEAR_WINE:
        case CONTAINER_EDITSTOCKPAGE_SET_WINE:
        case CONTAINER_COLLAPSABLESIDEBAR_TOGGLE:
        case CONTAINER_APPLICATION_DISABLE_BUSY_FLAG:
        case CONTAINER_APPLICATION_ENABLE_BUSY_FLAG:
            return {
                editStockPage: editStockReducer(state.editStockPage, action),
                collapsableSidebar: collapsableSidebarReducer(state.collapsableSidebar, action),
                application: applicationReducer(state.application, action),
            };
        default:
            return state;
    }
}
export const store: any = {
    data: dataReducer,
    containers: containersReducer
};