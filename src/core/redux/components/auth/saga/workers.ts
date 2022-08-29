import { PayloadAction } from "@reduxjs/toolkit";
import { INPUT_PAYLOAD } from "core/interfaces/interfaces";

export function* workerAuthLogin({
  payload,
}: PayloadAction<INPUT_PAYLOAD>): Generator {
  //   const data = yield call(authLoginRequest, payload);
  //   console.log(data);
  //   if (response) {
  //     const {
  //       access_token: accessToken,
  //       refresh_token: refreshToken,
  //       token_type: tokenType,
  //       authorities: permissions,
  //       user,
  //     } = response as INPUT_RESPONSE_AUTH;
  //     setStorage("access_token", accessToken);
  //     setStorage("refresh_token", refreshToken);
  //     setStorage("token_type", tokenType);
  //     yield put(
  //       rootActions.authLoginSuccess({
  //         permissions,
  //         user,
  //       })
  //     );
  //   } else {
  //     yield put(rootActions.authLoginError("no response"));
  //   }
}
