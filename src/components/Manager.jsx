import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const addPassword = () => {
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setForm({
      site: "",
      username: "",
      password: ""
    });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?")
    if(c){
      setpasswordArray(passwordArray.filter(item=>item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id !== id)));
    }
  };

  const editPassword = (id) => {
    console.log("h2")
    setForm(passwordArray.filter(item=>item.id === id)[0]);
    setpasswordArray(passwordArray.filter(item=>item.id !== id));
  };

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.3)_0%,rgba(0,163,255,0.2)_40%,rgba(0,163,255,0)_70%)]"></div>

      <div className="mycontainer">
        <h1 className="text-4xl text-gray-900 font-bold text-center">
          <span className="text-cyan-700">&lt;</span>
          Pass
          <span className="text-cyan-700">Protector/&gt;</span>
        </h1>
        <p className="text-gray-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            onChange={handleChange}
            value={form.site}
            placeholder="Enter Website URL"
            className="bg-cyan-700 rounded-full border border-cyan-500 w-full text-cyan-300 p-4 py-1"
            type="text"
            name="site"
          />

          <div className="flex justify-between gap-8 w-full">
            <input
              onChange={handleChange}
              value={form.username}
              placeholder="Enter Username"
              className="bg-cyan-700 rounded-full border border-cyan-500 w-full text-cyan-300 p-4 py-1"
              type="text"
              name="username"
            />
            <div className="relative">
              <input
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                className="bg-white rounded-full border border-cyan-500 w-full text-black p-4 py-1"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
              />
              <span
                className="absolute right-1 top-0.5 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src={isPasswordVisible ? "./opened.png" : "./closed.png"}
                  alt="Toggle password visibility"
                />
              </span>
            </div>
          </div>
          <button
            onClick={addPassword}
            className="flex justify-center items-center bg-cyan-700 rounded-full py-2 px-8 border border-cyan-500 w-fit hover:bg-cyan-600"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#16a9c7"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition="Bounce"
          />
          <ToastContainer />
          <h2 className="font-bold text-xl py-4 text-center text-cyan-700">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && <div>No Passwords to display</div>}
          {passwordArray.length !== 0 && (
            <div className="relative overflow-x-auto w-full">
              <table className="rounded-xl overflow-hidden w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                <thead className="bg-cyan-700 text-cyan-300 text-xs uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Site
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gradient-to-r from-cyanCustom via-cyanCustom1 to-cyanCustom">
                  {passwordArray.map((item) => {
                    return (
                      <tr
                        key={item.site}
                        className="border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div
                            className="flex items-center"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                marginRight: "8px",
                                cursor: "pointer",
                              }}
                              src="https://cdn.lordicon.com/lyrrgrsl.json"
                              trigger="hover"
                              colors="primary:#16a9c7"
                            ></lord-icon>
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.site}
                            </a>
                          </div>
                        </th>
                        <td className="px-6 py-4">
                          <div
                            className="flex items-center"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                marginRight: "8px",
                                cursor: "pointer",
                              }}
                              src="https://cdn.lordicon.com/fmasbomy.json"
                              trigger="hover"
                              colors="primary:#000000,secondary:#66d7ee,tertiary:#eeca66"
                            ></lord-icon>
                            <span>{item.username}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="flex items-center"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                marginRight: "8px",
                                cursor: "pointer",
                              }}
                              src="https://cdn.lordicon.com/okdadkfx.json"
                              trigger="hover"
                              colors="primary:#121331,secondary:#3080e8"
                            ></lord-icon>
                            <span>{item.password}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span onClick={()=>editPassword(item.id)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/zfzufhzk.json"
                                trigger="hover"
                                colors="primary:#121131,secondary:#e8b730,tertiary:#ebe6ef,quaternary:#f9c9c0,quinary:#3a3347"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  cursor: "pointer",
                                }}
                              ></lord-icon>
                            </span>
                            <span onClick={()=>deletePassword(item.id)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/xekbkxul.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#4bb3fd,tertiary:#000000,quaternary:#000000"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  cursor: "pointer",
                                }}
                              ></lord-icon>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
