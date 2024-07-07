import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SurveyDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SurveyDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="surveyId" source="surveyId" />
        <TextField label="surveyTitle" source="surveyTitle" />
        <TextField label="surveyDescription" source="surveyDescription" />
        <TextField label="targetAudience" source="targetAudience" />
        <TextField label="surveyPeriod" source="surveyPeriod" />
        <TextField label="questions" source="questions" />
        <TextField label="answers" source="answers" />
      </Datagrid>
    </List>
  );
};
