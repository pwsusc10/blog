import MailForm from "@/components/mailForm";
import { SiGithub, SiNaver, SiGoogle } from "react-icons/si";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "성표에게 연락하기",
};

const LINKS = [
  { icon: <SiGithub />, url: "" },
  { icon: <SiNaver />, url: "" },
  { icon: <SiGoogle />, url: "" },
];
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-bold my-2">Contact me</p>
      <p className="text-small font-light">pwsusc10@naver.com</p>
      <ul className="flex gap-7 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferer"
            className="text-5xl hover:text-yellow-600"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className=" text-4xl font-bold m-8">Or Send me an email</h2>
      <MailForm />
    </div>
  );
}
