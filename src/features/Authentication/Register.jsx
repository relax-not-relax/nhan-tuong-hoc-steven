import React, { useState } from "react";
import {
  ChevronDoubleLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import formatDate from "../../utils/formatDate";
import authenticationAPI from "../../api/authenticationApi";
import { useNavigate } from "react-router-dom";
import axiosClientServer from "../../api/axiosClientServer";

Register.propTypes = {};

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [avatar, setAvatar] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadAvatar(file);
    }
  };

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("imageFile", file);

    try {
      setIsUploading(true);
      const response = await axiosClientServer.post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setAvatar(response.data?.url);
    } catch (error) {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng đăng nhập lại!", {
        variant: "warning",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } finally {
      setIsUploading(false);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const [birthdate, setBirthdate] = useState({
    startDate: null,
    endDate: null,
  });
  const navigate = useNavigate();
  const MAX_DATE = new Date();
  MAX_DATE.setDate(MAX_DATE.getDate());

  const phoneRegex = /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    if (!avatar) {
      enqueueSnackbar("Vui lòng chọn ảnh đại diện!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }
    //console.log(data);
    const request = {
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      gender: data.gender,
      birthday: formatDate(data.birthday.startDate),
      avatar: avatar
    };
    console.log(request);
    setIsSubmit(true);
    try {
      await authenticationAPI.register(request);
      setIsSubmit(false);
      reset();
      enqueueSnackbar("Đăng ký tài khoản thành công!", {
        variant: "success",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng đăng nhập lại!", {
        variant: "warning",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      navigate("/xac-thuc");
    } catch (error) {
      console.log("Failed to register account: ", error);
      setIsSubmit(false);
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng đăng ký lại!", {
        variant: "warning",
        autoHideDuration: 4000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-y-scroll overflow-x-hidden">
      <div className="w-full h-24 flex flex-row justify-start items-center px-24 flex-none">
        <ChevronDoubleLeftIcon className="h-4 w-4 text-black" />
        <a
          href="/"
          className="ml-1 text-lg font-semibold text-slate-700 underline"
        >
          Về trang chủ
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grow flex justify-center items-center">
        <div>
          <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg mb-6">
            <div className="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-slate-800">
              <h3 class="text-2xl font-semibold">Đăng ký</h3>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Ảnh đại diện
                </label>
                {isUploading && (
                  <div className="mt-4 w-full h-32 flex justify-center items-center">
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
                )}
                {avatar && !isUploading && (
                  <div>
                    <div className="w-full flex flex-row justify-center items-center">
                      <img
                        src={avatar}
                        className="h-24 w-24 rounded-lg object-cover object-center"
                        alt="avatar"
                      />
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="py-2 block w-fit text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-indigo-700"
                    />
                  </div>
                )}
                {!isUploading && !avatar && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="py-2 block w-fit text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-indigo-700"
                  />
                )}
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Tên đăng nhập"
                  {...register("username", {
                    required: "Vui lòng nhập tên",
                  })}
                />
                {errors.username && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.username.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Email"
                  {...register("email", {
                    required: "Vui lòng nhập email",
                    pattern: {
                      value: emailRegex,
                      message: "Email không hợp lệ",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Số điện thoại
                </label>
                <input
                  type="phone"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Số điện thoại"
                  {...register("phone", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: phoneRegex,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.phone.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Giới tính
                </label>
                <div className="w-full">
                  <select
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    {...register("gender", {
                      required: "Vui lòng chọn giới tính",
                    })}
                    onChange={(e) => {
                      setValue("gender", e, {
                        shouldValidate: true,
                      });
                    }}
                  >
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.gender.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Ngày sinh
                </label>
                <Controller
                  name="birthday"
                  control={control}
                  rules={{ required: "Vui lòng chọn ngày sinh" }}
                  render={({ field }) => (
                    <Datepicker
                      asSingle={true}
                      useRange={false}
                      value={birthdate}
                      maxDate={MAX_DATE}
                      onChange={(newValue) => {
                        setBirthdate(newValue);
                        field.onChange(newValue); // Cập nhật giá trị cho react-hook-form
                      }}
                      primaryColor={"blue"}
                      i18n={"vi"}
                      displayFormat="DD/MM/YYYY"
                      inputClassName="border-2 border-slate-100 rounded-md w-full p-2 rounded-md focus:ring-0 font-normal bg-white placeholder:text-gray-700 text-black dark:bg-white dark:placeholder:text-gray-400"
                    />
                  )}
                />
                {errors.birthday && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.birthday.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Mật khẩu"
                    {...register("password", {
                      required: "Vui lòng nhập mật khẩu",
                      pattern: {
                        value: passwordRegex,
                        message:
                          "Mật khẩu phải từ 8 đến 16 ký tự, bao gồm ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt!",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-0 transform translate-y-1/2 -translate-x-8  w-full"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-black" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-black" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.password.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600 font-semibold text-start">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Xác nhận mật khẩu"
                    {...register("confirmPassword", {
                      required: "Vui lòng nhập lại mật khẩu",
                      validate: (value) =>
                        value === password || "Mật khẩu không khớp",
                    })}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-0 transform translate-y-1/2 -translate-x-8  w-full"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-black" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-black" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-400 text-start">
                    *{errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-6 pt-0">
              {isSubmit ? (
                <button
                  className="text-lg text-medium w-full rounded-md bg-slate-800 py-3 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex justify-center items-center"
                  type="button"
                  disabled={true}
                >
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
                </button>
              ) : (
                <button
                  className="text-lg text-medium w-full rounded-md bg-slate-800 py-3 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  Đăng ký
                </button>
              )}

              <p className="flex justify-center mt-6 text-base text-slate-600">
                Bạn đã có tài khoản?
                {isSubmit ? (
                  <span className="ml-1 text-base font-semibold text-slate-700 underline">
                    Đăng nhập
                  </span>
                ) : (
                  <a
                    href="/xac-thuc"
                    className="ml-1 text-base font-semibold text-slate-700 underline"
                  >
                    Đăng nhập
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
