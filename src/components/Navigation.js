import { Tabs} from "antd";
import { Components } from "antd/es/date-picker/generatePicker";
import Component from "./Component";
import Props from './Props'
import State from './State'
import Lifecycle from "./Lifecycle";
import Events from "./Events";
import Key from "./Key";
import Refs from "./Refs";
import Fragment from "./Fragment";
import ReactMemo from "./ReactMemo";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseMemo from "./UseMemo";
import Router from "./Router";
import Form from "./Form";
import "./ContentStyle.css";


export default function Navigation() {
const onChange = (key) => {
  console.log(key);
};

    const items = [
      {
        key: "1",
        label: `Components`,
        children: <Component />,
      },
      {
        key: "2",
        label: `Props`,
        children: <Props />,
      },
      {
        key: "3",
        label: `State`,
        children: <State />,
      },
      {
        key: "4",
        label: `Lifecycle`,
        children: <Lifecycle />,
      },
      {
        key: "5",
        label: `Events`,
        children: <Events />,
      },
      {
        key: "6",
        label: `Key`,
        children: <Key />,
      },
      {
        key: "7",
        label: `Refs`,
        children: <Refs />,
      },
      {
        key: "8",
        label: `Fragment`,
        children: <Fragment />,
      },
      {
        key: "9",
        label: `React.memo`,
        children: <ReactMemo />,
      },
      {
        key: "10",
        label: `useEffect`,
        children: <UseEffect />,
      },
      {
        key: "11",
        label: `useContext`,
        children: <UseContext />,
      },
      {
        key: "12",
        label: `useMemo`,
        children: <UseMemo />,
      },
      {
        key: "13",
        label: `Router`,
        children: <Router />,
      },
      {
        key: "14",
        label: `Form`,
        children: <Form/>,
      },
    ];
    return  <>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </>
}
