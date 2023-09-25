import { Button, Input } from "@/components";
import { homeStyles } from "@/styles";
import React, { useState, FormEvent } from "react";
import axios from "@/api";
import { useTranslation } from "react-i18next";

const Contacts = ({ dir }: any) => {
	const { t } = useTranslation()
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(event, "asda")
		setIsLoading(true);
		setError(null);
		try {
			return await axios.post("/", {
				url: "/contact",
				method: "POST",
				body: {
					// @ts-ignore
					name: event?.target[0]?.value,
					// @ts-ignore
					phone: event?.target[1]?.value,
					// @ts-ignore
					message: event?.target[2]?.value
				},
			}).then(() => {
				alert("Sent!")
			});
		} catch (err: any) {
			// @ts-ignore
			setError(err?.message);
			alert("Error occurred!");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className={homeStyles.contacts} id="contacts">
			<div className={`${homeStyles.contacts_wrapper}`}>
				<div className={homeStyles.contacts_left_side}>
					<span className={homeStyles.section_name}>{t("HOME.CONTACTS.SECTION_NAME")}</span>
					<h2 className={homeStyles.section_heading}>{t("HOME.CONTACTS.SUBTITLE")}</h2>
					{error && <div style={{ color: "red" }}>{error}</div>}
					<form onSubmit={onSubmit} className="mt-8 lg:mt-16">
						<Input name="name" placeholder={t("HOME.CONTACTS.INPUT_TYPE_NAME")} />
						<Input name="phone" placeholder={t("HOME.CONTACTS.INPUT_TYPE_PHONE")} />
						<textarea
							name="message"
							className="py-[18px] px-4 text-xl border w-full rounded-[1.25rem] border-[#1C1F35]"
							rows={4}
							cols={40}
							placeholder={t("HOME.CONTACTS.TEXTAREA")}
						/>
						<Button
							title={isLoading ? "Loading..." : t("HOME.CONTACTS.BUTTON")}
							type="submit"
							disabled={isLoading}
							classes="mt-7"
						/>
					</form>
				</div>
				<div className={homeStyles.contact_right_side}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.4220524595403!2d69.29367407605636!3d41.32143497130832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzE3LjIiTiA2OcKwMTcnNDYuNSJF!5e0!3m2!1sen!2s!4v1694494316595!5m2!1sen!2s"
						className={homeStyles.iframe}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					>
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
