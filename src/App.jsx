import { ActionButton } from "./components/ActionButton";
import { Dashboard } from "./components/Dashbaord";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";

export default function App() {
  return <div className="w-full flex">
    <SideBar/>
    <div className="w-full">
      <Dashboard/>
    </div>
  </div>
}
