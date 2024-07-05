import "./styles.scss";
import footerBackground from "../../images/footer-banner.png";
import logoText from "../../images/logo-chu.png";
import youtube from "../../images/youtube-icon.png";
import tiktok from "../../images/tiktok-icon.png";
import facebook from "../../images/fb-icon.png";
import instagram from "../../images/ins-icon.png";
import threads from "../../images/threads-icon.png";

export default function Footer() {
  return (
    <footer
      className="mx-auto h-fit my-footer"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="container mx-auto xl:w-3/4 px-5 xl:px-0 pt-0 md:pt-12 xl:pt-1 pb-10 md:pb-24 xl:pb-16">
        <img className="h-44 w-auto" src={logoText} alt="" />
        <div className="flex flex-wrap items-start justify-start">
          <div className="flex-auto sm:flex-initial sm:w-72 columns-3xs">
            <ul className="list-none">
              <li className="text-left">
                <a href="/" className="text-base sm:text-lg my-footer-el">
                  Đặt lịch tư vấn 1-1
                </a>
              </li>
              <li className="text-left">
                <a href="/" className="text-base sm:text-lg my-footer-el">
                  Các khoá học
                </a>
              </li>
              <li className="text-left">
                <a href="/" className="text-base sm:text-lg my-footer-el">
                  Thư viện bài viết
                </a>
              </li>
              <li className="text-left">
                <a href="/" className="text-base sm:text-lg my-footer-el">
                  Về chúng tôi
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-auto sm:flex-initial sm:w-4/12 columns-3xs text-left">
            <p className="my-footer-el-title text-base md:text-lg pb-2 pt-8 sm:pt-0">
              Thông tin liên hệ
            </p>
            <ul class="list-none">
              <li>
                <a href="/" className="text-sm sm:text-base text-black">
                  <div className="flex">
                    <div className="flex-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <p className="text-left ml-3">
                        nhantuonghocsteven@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="text-sm sm:text-base text-black">
                  <div className="flex">
                    <div className="flex-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <p className="text-left ml-3">
                        Email khoá học: daotao.nthsteven@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-auto sm:flex-initial sm:w-4/12 columns-3xs text-left">
            <p className="my-footer-el-title text-base md:text-lg pb-2 pt-8 sm:pt-0">
              Theo dõi Nhân tướng học Steven tại
            </p>
            <div className="flex">
              <a
                href="https://www.youtube.com/@nhantuonghocsteven"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="" className="pr-2" />
              </a>
              <a
                href="https://www.tiktok.com/@nt_steven89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="" className="pr-2" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086759123604"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="" className="pr-2" />
              </a>
              <a
                href="https://www.instagram.com/nthsteven/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="" className="pr-2" />
              </a>
              <a
                href="https://www.threads.net/@nthsteven"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={threads} alt="" className="pr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center content-center pb-5">
        <p className="text-xs min-[321px]:text-base pr-1 copyright">2024</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="copyright"
          className="w-4 pr-1"
        >
          <path
            fill="#827469"
            d="M11,9h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v4a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V10A1,1,0,0,1,11,9Zm1-7A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          ></path>
        </svg>
        <p className="text-xs min-[321px]:text-base pr-1 copyright">
          Nhân tướng học Steven - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
