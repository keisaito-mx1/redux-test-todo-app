import React from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { isInvalid, LoginFormValues } from ".";
import { loginAction } from "../../feature/ApiAuth/ApiAuthActions";
import ApiAuthSelector from "../../feature/ApiAuth/ApiAuthSelector";
import AppForm from "../organisms/AppForm";
import AppTemplate from "../templates/AppTemplate";

const AppPage: React.FC = () => {
  const methods = useForm<LoginFormValues>({ reValidateMode: "onSubmit" });
  const { isLoading } = useSelector(ApiAuthSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const errorText = isInvalid(methods.formState.errors)
    ? "IDとPasswordは5文字以上の任意の半角数字です。"
    : "";

  const onSubmit: SubmitHandler<LoginFormValues> = async () => {
    dispatch(loginAction());
    history.push("/tasks");
  };

  const onError: SubmitErrorHandler<LoginFormValues> = () => {
    methods.setValue("password", "");
  };

  return (
    <FormProvider {...methods}>
      <AppTemplate>
        <AppForm
          isLoading={isLoading}
          errorText={errorText}
          onSubmit={onSubmit}
          onError={onError}
        />
      </AppTemplate>
    </FormProvider>
  );
};

export default AppPage;
