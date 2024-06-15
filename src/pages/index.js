
import MainBox from "@/components/MainBox";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";








export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-row">
      <Sidebar />
      <MainBox/>
      <RightSidebar />
    </div>
  );
}
