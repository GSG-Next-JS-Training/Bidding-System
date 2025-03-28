import {
  showSnackbar,
  ShowSnackbarPayload,
} from "@/feaures/snackbarSlice/snackbarSlice";
import { useAppDispatch } from "@/store";

const useSnackbar = () => {
  const dispatch = useAppDispatch();

  const displaySnackbar = (payload: ShowSnackbarPayload) =>
    dispatch(showSnackbar(payload));

  return { displaySnackbar };
};

export default useSnackbar;
