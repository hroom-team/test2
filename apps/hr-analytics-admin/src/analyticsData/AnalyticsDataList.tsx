import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AnalyticsDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalyticsDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="aggregateResults" source="aggregateResults" />
        <TextField label="trendsAnalysis" source="trendsAnalysis" />
        <TextField label="correlations" source="correlations" />
        <TextField label="userActivityData" source="userActivityData" />
        <TextField label="benchmarkingData" source="benchmarkingData" />
        <TextField
          label="performanceReviewData"
          source="performanceReviewData"
        />
        <TextField
          label="systemPerformanceData"
          source="systemPerformanceData"
        />
      </Datagrid>
    </List>
  );
};
