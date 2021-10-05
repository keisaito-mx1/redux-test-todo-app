export const ApiAuthActionName = `ApiAuth`;

export type ApiAuthState = { isLoading: boolean; userId: string };

export const ApiAuthInitialState: ApiAuthState = {
  userId: "",
  isLoading: false,
};
