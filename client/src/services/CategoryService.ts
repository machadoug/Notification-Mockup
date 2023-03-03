import http from "../http-common";

const NotificationService = {
  getAll(params?: Object) {
    return http.get("/category", {'params': params || {}});
  },
}

export default NotificationService;
