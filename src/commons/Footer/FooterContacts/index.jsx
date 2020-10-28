import React from 'react';
import { SocialIcons } from './SocialIcons';

export const FooterContacts = () => {
  return (
    <div>
      <a href='tel:+380442902244'>+38 (044) 290 22 44 </a>
      <a href="mailto:office@dan-it.com.ua">office@dan-it.com.ua</a>
      <p>г. Киев, пр-т Павла Тычины, 1в, ТОЦ «Silver Breeze», офис А, 6-й этаж</p>
      <a href="https://www.facebook.com/daniteducation/" target="_blank" rel="nofollow">
        {SocialIcons.facebook}
      </a>
      <a href="https://www.instagram.com/daniteducation/" target="_blank" rel="nofollow">
        <img src="https://dan-it.com.ua/wp-content/themes/danIT/img/svg-icons/instagram.svg" alt="instagram icon" loading="lazy" decoding="async"/>
      </a>
    </div>
  )
}