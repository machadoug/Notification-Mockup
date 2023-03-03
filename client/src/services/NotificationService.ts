import http from "../http-common";

const NotificationService = {
  getAll(params: Object) {
    return http.get("/notification/history", {'params': params || {}});
  },

  send(data: any) {
    return http.post("/notification", data);
  }
}

export default NotificationService;
