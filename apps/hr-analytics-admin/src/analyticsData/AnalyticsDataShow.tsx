import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AnalyticsDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
