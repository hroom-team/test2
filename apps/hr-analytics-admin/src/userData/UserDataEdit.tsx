import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="telegramId" source="telegramId" />
        <TextInput label="role" source="role" />
        <TextInput label="department" source="department" />
        <TextInput label="location" source="location" />
        <TextInput label="company" source="company" />
        <TextInput label="languagePreference" source="languagePreference" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
