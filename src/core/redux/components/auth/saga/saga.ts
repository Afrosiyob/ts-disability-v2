import { all, fork } from "redux-saga/effects";

import watchAuthLogin from "./watchers";

export default function* authSaga(): Generator {
  yield all([fork(watchAuthLogin)]);
}
