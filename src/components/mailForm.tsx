"use client";

import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function MailForm() {
  const [sended, setSended] = useState("false");
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [bannerData, setBannerData] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // server에 mail post 요청
    sendContactEmail(form)
      .then((res) => {
        console.log(res);
        setBannerData({ message: `${res.message}`, state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        console.log(err);
        setBannerData({ message: `${err.message}`, state: "fail" });
      })
      .finally(() => {
        setTimeout(() => {
          setBannerData(null);
        }, 3000);
      });
  };
  return (
    <section className="w-full max-w-lg">
      {bannerData && <Banner banner={bannerData} />}
      <form
        onSubmit={onSubmit}
        className="flex flex-col p-4 gap-2 bg-cyan-950 text-white rounded-xl"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button className="bg-yellow-300 text-black my-2 hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
