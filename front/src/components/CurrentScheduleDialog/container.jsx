import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import { schedulesDeleteItem } from "../../redux/schedules/actions";

const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },

  deleteItem: id => {
    dispatch(schedulesDeleteItem(id));
    dispatch(currentScheduleCloseDialog());
  }

});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    deleteSchedule: () => {
      const {
        schedule: { form: schedule }
      } = stateProps;
      dispatchProps.deleteItem(schedule);
    }
  });

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);