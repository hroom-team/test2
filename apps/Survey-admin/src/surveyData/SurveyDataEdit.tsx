import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SurveyDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
