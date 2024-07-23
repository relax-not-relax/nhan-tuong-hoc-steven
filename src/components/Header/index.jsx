import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import logo from "../../images/logo_bg.png";
import { useState } from "react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuData } from "./MenuData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="bg-transparent my-header">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="/" className="-m-1.5 p-1.5 ">
            <img
              className="min-[376px]:h-20 min-[376px]:w-auto h-16 w-auto"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 fill-white" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex bg-red-100 page-group">
          {MenuData.map((val, key) => {
            const isActive =
              location.pathname === val.link ||
              location.pathname.startsWith(val.link);
            return (
              <a
                key={key}
                className="text-lg text-white font-semibold leading-6 text-gray-900 xl:py-3 xl:px-10 md:py-3 md:px-8"
                id={isActive ? "active" : ""}
                href={val.link}
                onClick={() => {
                  navigate(`${val.link}`);
                }}
              >
                {val.title}
              </a>
            );
          })}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="p-2 login-div">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <UserIcon className="h-10 w-10 fill-white" />
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        style={{
          zIndex: 10000,
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
        }}
      >
        <div className="fixed inset-0" style={{ zIndex: 10000 }} />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f4e6d2] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/khoa-hoc"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Khóa học
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Tư vấn 1-1
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Cửa hàng
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Thư viện
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Liên hệ
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
