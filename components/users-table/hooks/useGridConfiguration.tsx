import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { GridColDef } from "@mui/x-data-grid";

const useGridConfiguration = () => {
  const columns: GridColDef[] = [
    { field: "email", headerName: "email", flex: 1, align: "left" },
    { field: "fullName", headerName: "Name", width: 150, align: "left" },
    { field: "role", headerName: "role", flex: 1, align: "left" },
    { field: "phoneNumber", headerName: "Phone", width: 150, align: "left" },
    { field: "address", headerName: "Address", flex: 1 },
    {
      field: "birthDate",
      headerName: "Birth Date",
      width: 150,
      renderCell: (params) => {
        const date = new Date(params.value);
        const formatted = date.toLocaleDateString("en-CA");
        return formatted;
      },
    },
    {
      field: "confirmEmail",
      headerName: "Confirm Email",
      flex: 1,
      renderCell: ({ value }) =>
        value ? (
          <DownloadDoneIcon color="success" />
        ) : (
          <ErrorOutlineIcon color="error" />
        ),
      filterable: false,
    },
  ];

  return { columns };
};
export default useGridConfiguration;
