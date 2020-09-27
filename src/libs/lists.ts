import icon01 from "../assets/Icon.png";
import icon02 from "../assets/Icon02.png";
import icon03 from "../assets/Icon03.png";

export interface ListItem {
  name: string;
  url: string;
}


export const titleList = [" 关于我们", " 演出", " 活动动态", " 关注我们"];
export const playList: ListItem[] = [
  { name: "红玫瑰与白玫瑰", url: "play/红玫瑰与白玫瑰" },
  { name: "驴得水", url: "" },
  { name: "你好，疯子", url: "" },
  { name: "旧事", url: "" },
  { name: "暗恋桃花源", url: "" },
];
export const aboutList: ListItem[] = [
  { name: "戏言家庭", url: "member" },
  { name: "加入我们", url: "join" },
  { name: "支持戏言", url: "" },
  { name: "联系我们", url: "" },
];
export const mediaList = ["微信公众号", "Youtube", "Bilibili", "微博"];
export const mediaIconList = [icon02, icon01, icon01, icon03];
export const eventList = [
  { name: "读本会", url: "" },
  { name: "演员的诞生", url: "" },
];