import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SurveyDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="surveyId" source="surveyId" />
        <TextInput label="surveyTitle" source="surveyTitle" />
        <TextInput
          label="surveyDescription"
          multiline
          source="surveyDescription"
        />
        <div />
        <DateTimeInput label="surveyPeriod" source="surveyPeriod" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
