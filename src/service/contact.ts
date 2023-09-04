import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // 우리 API Route에 이메일 전송을 위한 요청을 보냄(fetch)
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);

  return response;
}
