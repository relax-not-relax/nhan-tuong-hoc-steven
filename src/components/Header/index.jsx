import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import logo from "../../images/logo_bg.png";
import { useEffect, useState } from "react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuData } from "./MenuData";
import userAPI from "../../api/userApi";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import authenticationAPI from "../../api/authenticationApi";
import { useSnackbar } from "notistack";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ACCESS_TOKEN = sessionStorage.getItem("accessTokenNths");
  const [isLogin, setIsLogin] = useState(ACCESS_TOKEN ? true : false);
  const [user, setUser] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const res = await userAPI.get();
        setUser(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to get user: ", error);
      }
    };

    if (isLogin) {
      fetchUser();
    } else {
      setUser(null);
    }
  }, [isLogin]);

  const handleLogout = async () => {
    try {
      await authenticationAPI.logout();
      sessionStorage.clear();
      setIsLogin(false);
      enqueueSnackbar("Đăng xuất thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      window.location.reload();
    } catch (error) {
      enqueueSnackbar("Đăng xuất không thành công", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };

  if (isLoading && user === null) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <svg
          class="text-gray-300 animate-spin"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-900"
          ></path>
        </svg>
      </div>
    );
  }

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
          {isLogin ? (
            <Menu>
              <MenuButton>
                <div className="p-2 login-div">
                  <UserIcon className="h-10 w-10 fill-white" />
                </div>
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                {user === null ? (
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      Xin chào!
                    </button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      Xin chào {user.username}
                    </button>
                  </MenuItem>
                )}

                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <button
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    onClick={handleLogout}
                  >
                    <ArrowLeftStartOnRectangleIcon className="size-4 fill-white/30" />
                    Đăng xuất
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <div className="p-2 login-div">
              <a
                href="/xac-thuc"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <UserIcon className="h-10 w-10 fill-white" />
              </a>
            </div>
          )}
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
                  href="/tu-van"
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
                  href="/thu-vien"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Thư viện
                </a>
                <a
                  href="/lien-he"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Liên hệ
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/xac-thuc"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#002d26] hover:bg-gray-50"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
