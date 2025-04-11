"use client";

import * as React from "react";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

interface DataTableProps<T> {
  title?: string;
  rows: T[] | undefined;
  columns: GridColDef[];
  getRowId?: (row: T) => GridRowId;
}

export default function DataTable<T>({
  title,
  rows,
  columns,
  getRowId,
}: DataTableProps<T>) {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#eceff1",
            fontSize: "16px",
            fontWeight: "bolder",
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      />
    </Box>
  );
}
