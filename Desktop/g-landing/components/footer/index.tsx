import { footerStyles } from '@/styles'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { PiMapPinLineFill } from 'react-icons/pi'

const Footer = ({ dir }: any) => {
  const { t } = useTranslation()
  return (
    <div className={footerStyles.footer}>
      <div className={`${footerStyles.wrapper} container`}>
        <div className='flex flex-col md:items-center  sm:max-w-[427px]'>
          <div className='max-w-sm '>
            <img className='max-w-[200px] md:max-w-[249px]' src="/images/logo2.svg" alt="this is logo" />
          </div>
          <p className={footerStyles.footer_paragraph}>{t("HOME.FOOTER.TEXT")}</p>
        </div>

        <div>
          <div className={footerStyles.footer__list}>
            <h5>{t("HOME.FOOTER.SEC_NAME_1")}</h5>
          </div>
          <ul className={footerStyles.footer_ul}>
            <li>
              <Link className={footerStyles.footer_list__link} href={"/"}>{t("HOME.FOOTER.SECTION_1")}</Link>
            </li>
            <li>
              <Link className={footerStyles.footer_list__link} href={"#about-us"}>{t("HOME.FOOTER.SECTION_2")}</Link>
            </li>
            <li>
              <Link className={footerStyles.footer_list__link} href={"#services"}>{t("HOME.FOOTER.SECTION_3")}</Link>
            </li>
            <li>
              <Link className={footerStyles.footer_list__link} href={"#news"}>{t("HOME.FOOTER.SECTION_4")}</Link>
            </li>
            <li>
              <Link className={footerStyles.footer_list__link} href={"#contacts"}>{t("HOME.FOOTER.SECTION_5")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={footerStyles.footer__list}>
            <h5>{t("HOME.FOOTER.SEC_NAME_2")}</h5>
          </div>
          <ul className={`${footerStyles.footer_ul} ${footerStyles.footer_ul__services}`}>

            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_resident">{t("HOME.FOOTER.SERVICE_1")}</Link></li>
            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_production">{t("HOME.FOOTER.SERVICE_2")}</Link></li>
            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_wholesale">{t("HOME.FOOTER.SERVICE_3")}</Link></li>
            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_catering">{t("HOME.FOOTER.SERVICE_4")}</Link></li>
            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_enterprises">{t("HOME.FOOTER.SERVICE_5")}</Link></li>
            <li className={footerStyles.footer_list__item}><Link className={footerStyles.footer_list__link} href="#for_other_services">{t("HOME.FOOTER.SERVICE_6")}</Link></li>
          </ul>
        </div>

        <div>
          <div className={footerStyles.footer__list}>
            <h5>{t("HOME.FOOTER.SEC_NAME_3")}</h5>
          </div>
          <ul className={footerStyles.footer_second_ul}>
            <li>
              <a className={footerStyles.contact__link} href="https://goo.gl/maps/4nLnhMXen1X9HF5MA">

                <PiMapPinLineFill className={footerStyles.icons} />
                <span className={footerStyles.address_text}>{t("HOME.FOOTER.ADDRESS")}</span>
              </a>
            </li>
            <li>
              <a className={footerStyles.contact__link} href="tel:+998971419129">
                <FaPhoneAlt className={footerStyles.icons} />
                <span>+998 97 141 91 29</span>
              </a>
            </li>
            <li>
              <a className={footerStyles.contact__link} href="https://gifted.buh.info@gmail.com">
                <FaEnvelope className={footerStyles.icons} />
                <span>gifted.buh.info@gmail.com</span>
              </a>
            </li>
            <li className={footerStyles.social_media_links}>
              <a href="https://instagram.com/dilaram_mukhiddinova"><FaInstagram className={`${footerStyles.icons} text-[22px]`} /></a>
              <a href="https://www.facebook.com/profile.php?id=61550484939836&mibextid=ZbWKwL"> <FaFacebook className={footerStyles.icons} /></a>
              <a href="https://t.me/gifted_accountant"><FaLocationArrow className={footerStyles.icons} /> </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.footer_line}></div>
      <div className={`container ${footerStyles.footer_last_section}`}>
        <p>
          &copy; 2023 Biccas Inc. Copyright and rights reserved &nbsp;
          <span>Made by <a href="https://devdivas.uz/"> DevDivas</a></span>
        </p>
        <div>
          <a href="#">Terms and Conditions </a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer