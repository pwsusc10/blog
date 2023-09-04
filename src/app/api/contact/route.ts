import { sendEmail } from "@/service/email";

export async function POST(req: Request) {
  const body = await req.json();

  const { from, subject, message } = body;

  // mail 보내기.
  sendEmail(body)
    .then(() => {
      return new Response(JSON.stringify({ message: "메일 전송 성공" }), {
        status: 200,
      });
    })
    .catch((err) => {
      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 400,
      });
    });
}
