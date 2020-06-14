import { SCHEDULES_ADD_ITEM, SCHEDULES_DELETE_ITEM } from "./actions";
import dayjs from "dayjs";

const init = {
    items: [
        {
            id: 1,
            title: "テスト",
            date: dayjs(),
            location: "会議室",
            description: "経営戦略について"
        }
    ],
    isLoading: false
};

const schedulesReducer = (state = init, action, id ) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, { ...payload, id: state.items.length + 1 }]
            };

        case SCHEDULES_DELETE_ITEM:
            return {
                ...state,
                items: [...state.items.splice(id, 1)]
            };

        default:
            return state;
    }
};

export default schedulesReducer;