import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col justify-center items-start gap-2.5 bg-[#0A0919] pt-10 pb-[110px] px-20 max-md:pt-[30px] max-md:pb-20 max-md:px-10 max-sm:pt-5 max-sm:pb-[60px] max-sm:px-5">
      <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:gap-10">
        <div className="flex w-[323px] flex-col items-start gap-[17px] max-sm:w-full">
          <img
            src="vontech.png"
            alt="Vontech Group Logo"
            className="w-[165px] h-[45px]"
          />
          <div className="flex items-start gap-5 w-full">
            <a href="#" className="flex w-[50px] justify-center items-center bg-[#3B5998] px-0 py-[12.5px] rounded-[25px] hover:bg-[#3B5998]/80 transition-colors">
              <svg style={{width:"25px", height:"25px", flexShrink:"0"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1094 13C25.1094 6.31055 19.6895 0.890625 13 0.890625C6.31055 0.890625 0.890625 6.31055 0.890625 13C0.890625 19.0439 5.31885 24.0537 11.1079 24.9629V16.5005H8.03174V13H11.1079V10.332C11.1079 7.29736 12.9146 5.62109 15.6816 5.62109C17.0068 5.62109 18.3926 5.85742 18.3926 5.85742V8.83594H16.8652C15.3613 8.83594 14.8921 9.76953 14.8921 10.7271V13H18.2505L17.7134 16.5005H14.8921V24.9629C20.6812 24.0537 25.1094 19.0439 25.1094 13Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="flex w-[50px] justify-center items-center bg-black px-0 py-[12.5px] rounded-[25px] hover:bg-black/80 transition-colors">
              <svg style={{width:"25px", height:"25px", flexShrink:"0"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5039 2.84375H22.9512L15.4219 11.4473L24.2793 23.1562H17.3457L11.9111 16.0566L5.7002 23.1562H2.24805L10.2998 13.9521L1.80859 2.84375H8.91797L13.8252 9.33301L19.5039 2.84375ZM18.293 21.0957H20.2021L7.87793 4.79688H5.82715L18.293 21.0957Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="flex w-[50px] justify-center items-center bg-[#0077B5] px-0 py-[12.5px] rounded-[25px] hover:bg-[#0077B5]/80 transition-colors">
              <svg style={{width:"25px", height:"25px", flexShrink:"0"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.375 2.0625H3.62012C2.76074 2.0625 2.0625 2.77051 2.0625 3.63965V22.3604C2.0625 23.2295 2.76074 23.9375 3.62012 23.9375H22.375C23.2344 23.9375 23.9375 23.2295 23.9375 22.3604V3.63965C23.9375 2.77051 23.2344 2.0625 22.375 2.0625ZM8.67383 20.8125H5.43164V10.373H8.67871V20.8125H8.67383ZM7.05273 8.94727C6.0127 8.94727 5.17285 8.10254 5.17285 7.06738C5.17285 6.03223 6.0127 5.1875 7.05273 5.1875C8.08789 5.1875 8.93262 6.03223 8.93262 7.06738C8.93262 8.10742 8.09277 8.94727 7.05273 8.94727ZM20.8271 20.8125H17.585V15.7344C17.585 14.5234 17.5605 12.9658 15.9004 12.9658C14.2109 12.9658 13.9521 14.2842 13.9521 15.6465V20.8125H10.71V10.373H13.8203V11.7988H13.8643C14.2988 10.9785 15.3584 10.1143 16.9355 10.1143C20.2168 10.1143 20.8271 12.2773 20.8271 15.0898V20.8125Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="flex w-[50px] justify-center items-center bg-neutral-800 px-0 py-[12.5px] rounded-[25px] hover:bg-neutral-800/80 transition-colors">
              <svg style={{width:"25px", height:"25px", flexShrink:"0"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0046 7.38452C9.89917 7.38452 7.39429 9.8894 7.39429 12.9949C7.39429 16.1003 9.89917 18.6052 13.0046 18.6052C16.1101 18.6052 18.615 16.1003 18.615 12.9949C18.615 9.8894 16.1101 7.38452 13.0046 7.38452ZM13.0046 16.6423C10.9978 16.6423 9.35718 15.0066 9.35718 12.9949C9.35718 10.9832 10.9929 9.34741 13.0046 9.34741C15.0164 9.34741 16.6521 10.9832 16.6521 12.9949C16.6521 15.0066 15.0115 16.6423 13.0046 16.6423ZM20.1531 7.15503C20.1531 7.88257 19.5671 8.46362 18.8445 8.46362C18.1169 8.46362 17.5359 7.87769 17.5359 7.15503C17.5359 6.43237 18.1218 5.84644 18.8445 5.84644C19.5671 5.84644 20.1531 6.43237 20.1531 7.15503ZM23.8689 8.48315C23.7859 6.73022 23.3855 5.17749 22.1013 3.89819C20.822 2.6189 19.2693 2.21851 17.5164 2.13062C15.7097 2.02808 10.2947 2.02808 8.48804 2.13062C6.73999 2.21362 5.18726 2.61401 3.90308 3.89331C2.6189 5.17261 2.22339 6.72534 2.1355 8.47827C2.03296 10.2849 2.03296 15.7 2.1355 17.5066C2.21851 19.2595 2.6189 20.8123 3.90308 22.0916C5.18726 23.3708 6.73511 23.7712 8.48804 23.8591C10.2947 23.9617 15.7097 23.9617 17.5164 23.8591C19.2693 23.7761 20.822 23.3757 22.1013 22.0916C23.3806 20.8123 23.781 19.2595 23.8689 17.5066C23.9714 15.7 23.9714 10.2898 23.8689 8.48315ZM21.5349 19.4451C21.1541 20.4021 20.4167 21.1394 19.4548 21.5251C18.0144 22.0964 14.5964 21.9646 13.0046 21.9646C11.4128 21.9646 7.98999 22.0916 6.55444 21.5251C5.59741 21.1443 4.86011 20.407 4.47437 19.4451C3.90308 18.0046 4.03491 14.5867 4.03491 12.9949C4.03491 11.4031 3.90796 7.98022 4.47437 6.54468C4.85522 5.58765 5.59253 4.85034 6.55444 4.4646C7.99487 3.89331 11.4128 4.02515 13.0046 4.02515C14.5964 4.02515 18.0193 3.89819 19.4548 4.4646C20.4119 4.84546 21.1492 5.58276 21.5349 6.54468C22.1062 7.98511 21.9744 11.4031 21.9744 12.9949C21.9744 14.5867 22.1062 18.0095 21.5349 19.4451Z" fill="white"/>
              </svg>
            </a>
          </div>
          <p className="w-full text-white text-base font-normal leading-6">
            VonTech Group is a cloud consulting company dedicated to helping businesses achieve their cloud goals with innovative solutions.
          </p>
        </div>
        
        <div className="flex h-[186px] items-start gap-[60px] max-md:h-auto max-md:flex-row max-md:flex-wrap max-md:gap-[30px] max-sm:flex-col max-sm:gap-8 max-sm:h-auto max-sm:w-full">
          <div className="flex w-[98px] flex-col items-start gap-3 max-sm:w-full max-sm:gap-4">
            <h3 className="w-full text-white text-xl font-medium leading-[30px] max-sm:text-base">Company</h3>
            <a href="#about" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">About</a>
            <a href="#services" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Services</a>
            <a href="#contact" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Contact Us</a>
          </div>
          
          <div className="flex flex-col items-start gap-3 max-sm:w-full max-sm:gap-4">
            <h3 className="w-full text-white text-xl font-medium leading-[30px] max-sm:text-base">Resources</h3>
            <a href="#webinars" className="w-full text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Webinars</a>
            <a href="#career" className="w-full text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Career</a>
            <a href="#blog" className="w-full text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Blog</a>
          </div>
          
          <div className="flex flex-col items-start gap-3 max-sm:w-full max-sm:gap-4">
            <h3 className="text-white text-xl font-medium leading-[30px] max-sm:text-base">Support</h3>
            <a href="#partners" className="w-full text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Partners</a>
            <a href="#support-portals" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Support portals</a>
            <a href="#contact" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Contact us</a>
          </div>
          
          <div className="flex flex-col items-start gap-3 max-sm:w-full max-sm:gap-4">
            <h3 className="w-full text-white text-xl font-medium leading-[30px] max-sm:text-base">Policy</h3>
            <a href="#privacy" className="w-full text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Privacy Policy</a>
            <a href="#cookies" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Cookies Policy</a>
            <a href="#terms" className="text-white text-base font-normal leading-6 hover:text-[#FFE21B] transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
      
      <div className="flex w-full justify-between items-center p-5 border-t-[#191919] border-t border-solid">
        <p className="flex-[1_0_0] text-white text-center text-sm font-medium leading-[19.6px]">
          Copyright © 2025 VonTech Group. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};
