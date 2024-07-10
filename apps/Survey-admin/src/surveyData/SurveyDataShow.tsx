import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SurveyDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
