export default function DecodeToken() {
  // accessToken 가져오기
  const token = sessionStorage.getItem("accessToken")?.replace("Bearer ", "");
  // token이 없으면 알림 표시
  if (!token) {
    // console.log("토큰이 없습니다.");
    return;
  }
  const base64Payload = token.split(".")[1];

  const base64 = base64Payload.replace(/-/g, "+").replace(/_/g, "/");

  const decodedJWT = JSON.parse(
    decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    ),
  );
  return decodedJWT;
}
