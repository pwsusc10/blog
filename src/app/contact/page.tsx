import MailForm from "@/components/mailForm";
import { SiGithub } from "react-icons/si";
import { SiNaver } from "react-icons/si";
import { SiGoogle } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <p className="text-4xl font-bold">Contact me</p>
        <p className="text-small font-light">pwsusc10@naver.com</p>
        <ul className="list-none flex justify-center text-3xl ">
          <li className="m-7">
            <SiGithub />
          </li>
          <li className="m-7">
            <SiNaver />
          </li>
          <li className="m-7">
            <SiGoogle />
          </li>
        </ul>
        <p className="text-4xl font-bold m-8">Or Send me an email</p>
      </div>
      <div className="w-2/5">
        <MailForm></MailForm>
      </div>
    </div>
  );
}
