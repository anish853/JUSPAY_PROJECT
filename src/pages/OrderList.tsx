import { useNavigate } from "react-router-dom";
import { orderList } from "../constants/orderList";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function OrderList() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { theme } = context;

  return (
    <div className="h-full dark:bg-[#1c1c1c] dark:text-[#fff] p-[12px]">
      <span
        className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal py-[4px] underline cursor-pointer"
        onClick={() => navigate("/")}
      >
        Go to Home
      </span>
      <div className="font-semibold text-[14px]">Order List</div>
      <div className="dark:bg-[#fff] dark:bg-opacity-[0.05] flex items-center justify-between mt-4 bg-[#f7f9fb] p-[8px] rounded-[8px]">
        <div className="flex items-center gap-x-[4px]">
          {Array.from([
            { icon: "Add.png" },
            { icon: "FunnelSimple.png" },
            { icon: "ArrowsDownUp.png" },
          ]).map((currItem) => (
            <div>
              <button>
                <img
                  src={`${theme === "dark" ? "dark/" : ""}${currItem.icon}`}
                  className="w-[20px] h-[20px]"
                />
              </button>
            </div>
          ))}
        </div>
        {/* Search Box */}
        <div className="dark:border dark:border-[#fff] dark:border-opacity-10 dark:bg-opacity-40 px-[8px] py-[4px] w-[160px] bg-[#1c1c1c] bg-opacity-10 rounded-[8px]">
          <div className="flex items-center gap-x-[4px]">
            <span>
              <img
                src={`${theme === "dark" ? "dark/" : ""}Search.png`}
                className="w-[16px] h-[16px]"
              />
            </span>
            <span className="opacity-20">Search</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4">
        <table className="w-full">
          <tr className="dark:border-[#fff] dark:border-opacity-20 border-b border-[#1c1c1c] border-opacity-20">
            <th></th>
            {Array.from([
              { th: "Order ID" },
              { th: "User" },
              { th: "Project" },
              { th: "Address" },
              { th: "Date" },
              { th: "Status" },
            ]).map((currItem) => (
              <th className="dark:text-[#fff] dark:opacity-40 text-start text-[12px] text-[#1c1c1c] opacity-40 font-normal px-[12px] py-[8px]">
                {currItem.th}
              </th>
            ))}
          </tr>
          {orderList.map((currItem) => (
            <tr className="dark:hover:bg-[#fff] dark:hover:bg-opacity-5 dark:border-[#fff] dark:border-opacity-10 hover:bg-[#f7f9fb] border-b border-[#1c1c1c] border-opacity-5 text-[12px] font-normal group">
              <td className="px-[12px] py-[8px] rounded-tl-[8px] rounded-bl-[8px]"></td>
              <td className="px-[12px] py-[8px]">{currItem.orderId}</td>
              <td className="px-[12px] py-[8px]">
                <span className="flex items-center gap-x-[8px]">
                  <img src={currItem.userImage} className="w-[24px] h-[24px]" />
                  {currItem.userName}
                </span>
              </td>
              <td className="px-[12px] py-[8px]">{currItem.projectName}</td>
              <td className="px-[12px] py-[8px]">{currItem.address}</td>
              <td className="px-[12px] py-[8px]">
                <span className="flex items-center gap-x-[8px]">
                  <img src="CalendarBlank.png" className="w-[16px] h-[16px]" />
                  {currItem.date}
                </span>
              </td>
              <td className="px-[12px] py-[8px] text-center">
                <span
                  style={{
                    color:
                      theme === "dark" && currItem.dark_status_color
                        ? currItem.dark_status_color
                        : currItem.status_color,
                    opacity:
                      theme !== "dark" && currItem.status === "REJECTED"
                        ? 0.4
                        : 1,
                  }}
                  className="flex items-center gap-x-[8px]"
                >
                  <span
                    style={{
                      backgroundColor:
                        theme === "dark" && currItem.dark_status_color
                          ? currItem.dark_status_color
                          : currItem.status_color,
                    }}
                    className={`w-[6px] h-[6px] rounded-full`}
                  ></span>
                  {currItem.status_text}
                </span>
              </td>
              <td className="px-[12px] py-[8px] rounded-tr-[8px] rounded-br-[8px]">
                <img
                  src={`${
                    theme === "dark" ? "dark/" : ""
                  }DotsThreeOutlineVertical.png`}
                  className="group-hover:opacity-100 opacity-0 w-[16px] h-[16px]"
                />
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* pagination buttons */}
      <div className="mt-4 flex items-center gap-x-[8px] justify-end">
        <button className="w-[28px] h-[28px] p-[4px]">
          <img
            src={`${theme === "dark" ? "dark/" : ""}ArrowLineLeft.png`}
            className="w-[20px] h-[20px]"
          />
        </button>
        <div className="flex items-center gap-x-[8px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              className={`w-[28px] h-[28px] px-[8px] py-[4px] rounded-[8px] flex items-center justify-center ${
                index === 0
                  ? theme === "dark"
                    ? "bg-[#fff] bg-opacity-5"
                    : "bg-[#1c1c1c] bg-opacity-5"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button className="w-[28px] h-[28px] p-[4px] rotate-180">
          <img
            src={`${theme === "dark" ? "dark/" : ""}ArrowLineLeft.png`}
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
    </div>
  );
}

export default OrderList;
