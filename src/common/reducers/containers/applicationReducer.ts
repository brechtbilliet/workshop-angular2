import {Action} from "@ngrx/store";
import {ApplicationContainerState} from "../../state/ContainersState";

export function applicationReducer(state: ApplicationContainerState = {isBusy: false},
                                   action: Action): ApplicationContainerState {
    switch (action.type) {
        default:
            return state;
    }
};