import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

function Sidebar() {

  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)


  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="p-[20px] bg-[#a0a1a2] inline-flex flex-col max-[640px]:hidden justify-between">
      <div>
        <div
          onClick={() => {
            setExtended(prev => !prev);
          }}
          className="cursor-pointer p-3 "
        >
          <img className="w-[20px]" src={assets.menu_icon} alt="Menu" />
        </div>
        <div onClick={() => newChat()} className="flex px-3 py-2 items-center mt-9 bg-[#DCFCE7] rounded-full cursor-pointer hover:bg-[#bbefcd] transform transition-all ease-linear duration-200">
          <img
            className="w-[25px] rounded-full"
            src={assets.plus_icon}
            alt="New Chat"
          />
          {extended && <p className="ms-3">New Chat</p>}
        </div>
        <div className="mt-5">
          {extended && (
            <div>
              <p>Recent</p>
              <div className="overflow-y-scroll lg:h-[130px] xl:h-[350px] overflow-hidden">
                {prevPrompts.map((item, index) => (
                  <div onClick={() => loadPrompt(item)} className="flex gap-x-3 mt-3 hover:bg-slate-300 py-1 px-2 rounded-full cursor-pointer transform transition-all ease-linear duration-200 " key={index}>
                    <img
                      className="w-[25px] h-[25px]"
                      src={assets.message_icon}
                      alt="Message"
                    />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                ))}
              </div>
            </div>

          )}
        </div>
      </div>
      <div className="transform transition-all duration-500">
        <div className="flex gap-4 hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200 cursor-pointer">
          <img
            onClick={() => setExtended(true)}
            className="w-[20px] h-[20px]"
            src={assets.question_icon}
            alt="Help"
          />
          {extended && <p>Help</p>}
        </div>
        <div className="flex gap-4  hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200 cursor-pointer">
          <img
            onClick={() => setExtended(true)}
            className="w-[20px] h-[20px]"
            src={assets.history_icon}
            alt="Activity History"
          />
          {extended && <p>Activity</p>}
        </div>
        <div className="flex gap-4 hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200">
          <img
            onClick={() => setExtended(true)}
            className="w-[20px] h-[20px]"
            src={assets.setting_icon}
            alt="Settings"
          />
          {extended && <p>Settings</p>}
        </div>
        {extended && (
          <ul className="p-4 text-xs list-disc ">
            <li key="location">Dhaka, Bangladesh</li>
            <p className="text-cyan-500">
              From your IP address • Update location
            </p>
          </ul>
        )}
      </div>
    </div>
  );
}
export default Sidebar;
