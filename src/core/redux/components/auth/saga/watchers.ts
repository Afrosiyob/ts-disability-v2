import { rootActions } from "core/redux/roots/root-action";
import { takeEvery } from "redux-saga/effects";

import { workerAuthLogin } from "./workers";

export default function* watchAuthLogin(): Generator {
  yield takeEvery(rootActions.authLogin.type, workerAuthLogin);
}
