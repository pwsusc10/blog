import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "옳바르지 않은 입력입니다." }),
      {
        status: 400,
      }
    );
  }

  // mail 보내기.
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 성공" }), {
          status: 200,
        })
    )
    .catch((err) => {
      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
